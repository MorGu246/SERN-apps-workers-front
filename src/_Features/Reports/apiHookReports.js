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
                const [datePart, timePart] = log.log_time.split('T');
                const [y, m, d] = datePart.split('-');
                const dateStr = `${+d}.${+m}.${y}`;

                let [hours, minutes] = timePart.slice(0, 5).split(':').map(Number);
                hours = (hours + 3) % 24;
                
                const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

                const logDate = new Date(log.log_time);

                if (log.action_type === 'check_in') {
                    if (current) grouped.push(current);
                    current = { dateObj: logDate, dateStr, inStr: timeStr, outStr: '--:--', hrs: '0' };
                } else if (log.action_type === 'check_out') {
                    if (current) {
                        const hrs = ((logDate - current.dateObj) / 3600000).toFixed(2);
                        grouped.push({ ...current, outStr: timeStr, hrs });
                        current = null;
                    } else {
                        grouped.push({ dateStr, inStr: '--:--', outStr: timeStr, hrs: '0' });
                    }
                }
            });
            if (current) grouped.push(current);

            setReports(grouped.map(r => ({
                date: r.dateStr,
                report_date: r.dateStr,
                date_str: r.dateStr,
                entrance_time: r.inStr,
                exit_time: r.outStr,
                total_hours: r.hrs
            })));

        } catch (err) {
            setError(err.message || 'נכשלה התקשורת עם השרת בהבאת הדוחות.');
            setReports([]);
        } finally {
            setLoading(false);
        }
    };

    return { reports, loading, error, getReports, clearReports: () => setReports([]) };
};