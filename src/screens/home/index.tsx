import React from "react";
import { Button } from "react-native";
import { useAuth } from "../../context/auth";

export const Home = () => {

    const { signOut } = useAuth();

    return (
        <>
            <Button title="Logout" onPress={signOut} />
        </>
    );
};
