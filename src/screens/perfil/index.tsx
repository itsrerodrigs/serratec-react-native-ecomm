import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { useAuth } from '../../context/auth';

export const Perfil = () => {
    const { signOut } = useAuth();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleSave = () => {
        console.log({ nome, email });
        alert('Perfil atualizado com sucesso!');
    };

    const handleChangePassword = () => {
        if (novaSenha !== confirmarSenha) {
            Alert.alert('Erro', 'As senhas não correspondem!');
        } else {
            console.log({ novaSenha });
            alert('Senha alterada com sucesso!');
        }
    };

    return (
        <View style={styles.container}>
    <View style={styles.salvarButtonContainer}>
        <TouchableOpacity onPress={handleSave} style={styles.salvarButton}>
            <Text style={styles.salvarButtonText}>Salvar</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.profileImageContainer}>
        <TouchableOpacity onPress={() => console.log('Profile image pressed')}>
            <Image
                source={{ uri: 'https://via.placeholder.com/150' }}
                style={styles.profileImage}
            />
        </TouchableOpacity>
    </View>
    <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
    />
    <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
    />
    <Text style={styles.changePasswordText}>Deseja alterar senha?</Text>
    <TextInput
        placeholder="Nova senha"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
        style={styles.input}
    />
    <TextInput
        placeholder="Confirmar senha"
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        secureTextEntry
        style={styles.input}
    />
    <View style={styles.buttonContainer}>
        <Button title="Alterar senha" onPress={handleChangePassword} color="#43d3aa" />
    </View>
</View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    salvarButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    salvarButton: {
        backgroundColor: '#43d3aa',
        padding: 10,
        borderRadius: 5,
    },
    salvarButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    input: {
        height: 40,
        borderColor: '#bdd4cf',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    changePasswordText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 8,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
});
