import React from 'react';
import { FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { CardIntegrante } from '../CardIntegrante/CardIntegrante';

interface Integrante {
    id: number;
    name: string;
    image: string;
    position: string;
    description: string;
    linkedin: string;
    github: string;
    iconLinkedIn: string;
    iconGitHub: string;
  }

interface FlatListIntegrantesProps {
    data: Integrante [];
}

export const FlatListIntegrantes: React.FC<FlatListIntegrantesProps> = ({
    data}) => {
        const renderItem = ({ item }: {item: Integrante}) => (
            <CardIntegrante
            name={item.name}
            image={item.image}
            position={item.position}
            description={item.description}
            linkedin={item.linkedin}
            github={item.github}
            iconLinkedIn={item.iconLinkedIn} 
            iconGitHub={item.iconGitHub}
            />
        )

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
        backgroundColor: '#114552',
    },
    listContent: {
        padding: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});