import { useState } from 'react';
import { postEntrance, postExit } from './apiAttendance';

export const useAttendance = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    // פונקציה פנימית לאיפוס הודעות ישנות לפני פעולה חדשה
    const resetStates = () => {
        setError(null);
        setSuccessMessage(null);
    };

    // טיפול בדיווח כניסה
    const handleEntrance = async (tz) => {
        resetStates();
        setLoading(true);
        try {
            const data = await postEntrance(tz);
            // מניחים שהשרת מחזיר אובייקט עם success ו-message
            if (data.success) {
                setSuccessMessage(data.message); 
                return true; 
            } else {
                setError(data.message || 'חלה שגיאה ברישום הכניסה.');
                return false;
            }
        } catch (err) {
            // תפיסת שגיאות שנזרקו מה-fetch
            const errMsg = err.response?.data?.message || 'נכשלה התקשורת עם השרת.';
            setError(errMsg);
            return false;
        } finally {
            setLoading(false);
        }
    };

    // טיפול בדיווח יציאה
    const handleExit = async (tz) => {
        resetStates();
        setLoading(true);
        try {
            const data = await postExit(tz);
            if (data.success) {
                setSuccessMessage(data.message);
                return true;
            } else {
                setError(data.message || 'חלה שגיאה ברישום היציאה.');
                return false;
            }
        } catch (err) {
            const errMsg = err.response?.data?.message || 'נכשלה התקשורת עם השרת.';
            setError(errMsg);
            return false;
        } finally {
            setLoading(false);
        }
    };

    return {
        handleEntrance,
        handleExit,
        loading,
        error,
        successMessage,
        resetStates
    };
};