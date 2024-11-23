import { api1 } from "./api";

const login = async (usuario: { email: string; senha: string; }) => {
    try {
        const response = await api1.get<any[]>('/usuarios')
        
        const user = response.data.some(user => (user.email === usuario.email && user.senha === usuario.senha))
        if(user) {
            return usuario;
        }
        throw new Error;
    } catch (error) {
        
        throw error;
    }
}

export default {
    login
}
