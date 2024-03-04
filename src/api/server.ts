const token = '5d7d2bf2a4c7cf5c8a8aaa84f8343ece85f99d53b57702d6'

export const server_calls = {
    get: async () => { 
        const response = await fetch(`http://127.0.0.1:5000/api/cars/all`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
}