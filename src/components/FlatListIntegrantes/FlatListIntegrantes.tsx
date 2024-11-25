import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { CardIntegrante } from '../CardIntegrante/CardIntegrante';

interface Integrante {
    id: number;
    name: string;
    image: string;
    position: string;
    description: string;
    linkedin: string;
    github: string;
  }

interface FlatListIntegrantesProps {
    data: Integrante [];
    onPressItem: (item: Integrante) => void;
}

export const FlatListIntegrantes: React.FC<FlatListIntegrantesProps> = ({
    data, onPressItem }) => {
        const renderItem = ({ item }: {item: Integrante}) => (
            <CardIntegrante
            name={item.name}
            image={item.image}
            position={item.position}
            description={item.description}
            linkedin={item.linkedin}
            github={item.github}
            onPress={() => onPressItem(item)}
            />
        )


        /*
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://673cdf7096b8dcd5f3fbfe5a.mockapi.io/users/');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Erro ao buscar usuários: ', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const renderItem = ({ item }: { item: any }) => (
        <CardIntegrante
            name={item.name}
            image={item.image}
            position={item.position}
            description={item.description}
        />
    );

    if (loading) {
        return (
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#0000ff' />
                <Text>Carregando...</Text>
            </SafeAreaView>
        );
    }*/

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    listContent: {
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});