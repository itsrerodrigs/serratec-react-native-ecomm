import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextData {
  signed: boolean;
  user: any;
  signIn(usuario: any): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(undefined);
  const [signed, setSigned] = useState<any>(false); 

  useEffect(() => {
    const loadStorageData = async () => {
      const storageUser: any = await AsyncStorage.getItem("@Usuario:user");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setSigned(true);
      }
    };
    loadStorageData();
  }, [])

  const signIn = async (usuario: any) => {
    await AsyncStorage.setItem("@Usuario:user", JSON.stringify(usuario));
    setUser(usuario); 
    setSigned(true); 

    return Promise.resolve();
  };

  const signOut = async () => {
    await AsyncStorage.clear();
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

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider')
    }
    return context;
};