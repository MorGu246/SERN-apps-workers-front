import { useState } from 'react';
import { postEntrance, postExit } from './apiAttendance';

export const useAttendance = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const resetStates = () => {
        setError(null);
        setSuccessMessage(null);
    };

    const handleEntrance = async (tz) => {
        resetStates();
        setLoading(true);
        try {
            const data = await postEntrance(tz);
            if (data.success) {
                setSuccessMessage(data.message); 
                return true; 
            } else {
                setError(data.message || 'חלה שגיאה ברישום הכניסה.');
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