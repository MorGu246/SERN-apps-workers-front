import { useState } from 'react';
import { fetchReportsFromServer } from './apiReports';

export const useReports = () => {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getReports = async (tz, month, year) => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchReportsFromServer(tz, month, year);
            if (!res.success) throw new Error(res.message || 'חלה שגיאה בטעינת הנתונים.');

            const sorted = [...(res.data || [])].sort((a, b) => new Date(a.log_time) - new Date(b.log_time));
            const grouped = [];
            let current = null;

            sorted.forEach(log => {
                // 1. פירוק ידני של מחרוזת הזמן כדי למנוע "משחקי" אזורי זמן של הדפדפן
                const [datePart, timePart] = log.log_time.split('T');
                const [y, m, d] = datePart.split('-');
                const dateStr = `${+d}.${+m}.${y}`;

                // 2. 🎯 תיקון ידני של 3 שעות קדימה (שעון ירושלים) על הזמן הגולמי
                let [hours, minutes] = timePart.slice(0, 5).split(':').map(Number);
                hours = (hours + 3) % 24; // % 24 שומר עלינו במקרה שהשעה עוברת את חצות
                
                // בנייה מחדש של מחרוזת השעה המעודכנת (למשל "11:30")
                const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

                const logDate = new Date(log.log_time);

                if (log.action_type === 'check_in') {
                    if (current) grouped.push(current);
                    current = { dateObj: logDate, dateStr, inStr: timeStr, outStr: '--:--', hrs: '0' };
                } else if (log.action_type === 'check_out') {
                    if (current) {
                        // חישוב הפרש השעות נשאר תקין ומדויק כי שני הזמנים זזים באותו יחס
                        const hrs = ((logDate - current.dateObj) / 3600000).toFixed(2);
                        grouped.push({ ...current, outStr: timeStr, hrs });
                        current = null;
                    } else {
                        grouped.push({ dateStr, inStr: '--:--', outStr: timeStr, hrs: '0' });
                    }
                }
            });
            if (current) grouped.push(current);

            // 3. מיפוי דינמי לרכיב הטבלה
            setReports(grouped.map(r => {
                const row = { date: r.dateStr, report_date: r.dateStr, date_str: r.dateStr };
                
                const inKeys = ['check_in', 'checkIn', 'checkin', 'entry', 'entry_time', 'entryTime', 'entrance', 'entrance_time', 'entranceTime', 'start', 'start_time', 'startTime', 'from', 'from_time', 'fromTime', 'in', 'time_in', 'timeIn', 'hour_in', 'hourIn'];
                const outKeys = ['check_out', 'checkOut', 'checkout', 'exit', 'exit_time', 'exitTime', 'end', 'end_time', 'endTime', 'to', 'to_time', 'toTime', 'out', 'time_out', 'timeOut', 'hour_out', 'hourOut'];
                const hrKeys = ['hours', 'total_hours', 'totalHours', 'work_hours'];

                inKeys.forEach(key => row[key] = r.inStr);
                outKeys.forEach(key => row[key] = r.outStr);
                hrKeys.forEach(key => row[key] = r.hrs);

                return row;
            }));

        } catch (err) {
            setError(err.message || 'נכשלה התקשורת עם השרת בהבאת הדוחות.');
            setReports([]);
        } finally {
            setLoading(false);
        }
    };

    return { reports, loading, error, getReports, clearReports: () => setReports([]) };
};