import { createContext, ReactNode, useContext, useState } from "react";

interface AuthContextData {
  signed: boolean;
  user: any;
  signIn(usuario: any): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(undefined);
  const [signed, setSigned] = useState<any>(false); 

  const signIn = async (usuario: any) => {
    setUser(usuario); 
    setSigned(true); 

    return Promise.resolve();
  };

  const signOut = () => {
    setUser(undefined);
    setSigned(false);
  }

  return (
    <AuthContext.Provider
      value={{
        signed,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }
    return context;
};