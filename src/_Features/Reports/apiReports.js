const API_BASE_URL = "http://localhost:6128/api";

/**
 * שליחת בקשה לקבלת דוחות נוכחות מהשרת
 * @param {string} tz - תעודת זהות של העובד
 * @param {string|number} month - חודש נבחר
 * @param {string|number} year - שנה נבחרת
 */
export const fetchReportsFromServer = async (tz, month, year) => {
    // בניית הכתובת עם הפרמטרים: /api/reports?tz=123&month=6&year=2026
    const url = `${API_BASE_URL}/reports?tz=${tz}&month=${month}&year=${year}`;
    
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } };
    }

    return await response.json();
};