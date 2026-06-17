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
            const data = await fetchReportsFromServer(tz, month, year);
            // מניחים שהשרת מחזיר אובייקט עם מערך בשם data או ישירות מערך
            if (data.success) {
                setReports(data.reports || []);
            } else {
                setError(data.message || 'חלה שגיאה בטעינת הנתונים.');
                setReports([]);
            }
        } catch (err) {
            const errMsg = err.response?.data?.message || 'נכשלה התקשורת עם השרת בהבאת הדוחות.';
            setError(errMsg);
            setReports([]);
        } finally {
            setLoading(false);
        }
    };

    const clearReports = () => {
        setReports([]);
        setError(null);
    };

    return {
        reports,
        loading,
        error,
        getReports,
        clearReports
    };
};