import { useState } from 'react';

const apiURL = process.env.REACT_APP_API_URL;

const useApi = () => {
    const [response, setResponse] = useState('');

    const getResponse = async (message) => {
        try {
            const res = await fetch(apiURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                    body: JSON.stringify({ message }),
            });
            const data = await res.json();
            
            setResponse(data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return { response, getResponse };
};

export default useApi;

