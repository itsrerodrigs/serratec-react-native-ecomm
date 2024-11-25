import { api1 } from "./api";

const login = async (usuario: { email: string; senha: string }) => {
    try {
        const response = await api1.get<any[]>('/usuarios');
        
        const user = response.data.find(user => (user.email === usuario.email && user.senha === usuario.senha));
        if(user) {
            return user;
        }
        throw new Error('Usuário não encontrado');
    } catch (error) {
        throw error;
    }
}

export default {
    login
};
