const API_BASE_URL = "http://localhost:6128/api";

export const postEntrance = async (tz) => {
    const response = await fetch(`${API_BASE_URL}/ENT`, {
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