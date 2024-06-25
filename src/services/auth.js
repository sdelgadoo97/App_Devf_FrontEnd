const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const loginUser = async(email, password) => {
    try {
        const result = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const { data } = await result.json();
        return data;
    } catch (error) {
        console.log(`Error al iniciar sesión: ${error.message}`);
    }
};

export {
    loginUser
}