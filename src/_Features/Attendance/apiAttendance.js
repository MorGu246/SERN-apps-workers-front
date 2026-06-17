const API_BASE_URL = "http://localhost:6128/api";

/**
 * שליחת בקשת כניסה לשרת באמצעות Fetch המובנה
 */
export const postEntrance = async (tz) => {
    const response = await fetch(`${API_BASE_URL}/ENT`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tz }) // הפיכת האובייקט לטקסט שהשרת מבין
    });

    // אם השרת החזיר שגיאה (למשל סטטוס 400 או 500)
    if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } }; 
    }

    return await response.json();
};

/**
 * שליחת בקשת יציאה לשרת באמצעות Fetch המובנה
 */
export const postExit = async (tz) => {
    const response = await fetch(`${API_BASE_URL}/EXT`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tz })
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw { response: { data: errorData } };
    }

    return await response.json();
};