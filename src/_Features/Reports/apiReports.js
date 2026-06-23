//const API_BASE_URL = "http://localhost:6128/api";
import { API_BASE_URL } from '../../vars';

/**
 * @param {string} tz - תעודת זהות של העובד
 * @param {string|number} month - חודש נבחר
 * @param {string|number} year - שנה נבחרת
 */
export const fetchReportsFromServer = async (tz, month, year) => {

    const url = `${API_BASE_URL}/REP?tz=${tz}&month=${month}&year=${year}`;
    
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