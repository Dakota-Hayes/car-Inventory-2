const token = '3fe15309db19277225e3cad6f62f8ae60e785f3319b8bf02'

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