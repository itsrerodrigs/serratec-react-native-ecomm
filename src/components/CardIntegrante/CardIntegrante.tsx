import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type CardIntegranteProps = {
    name: string;
    image: string;
    position: string;
    description: string;
};

export const CardIntegrante: React.FC<CardIntegranteProps> = ({ name, image, position, description }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.position}>{position}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#d8d8d8',
        borderRadius: 10,
        padding: 50,
        marginVertical: 8,
        alignItems: 'center',
        elevation: 2,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 12,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    position: {
        fontSize: 15,
        color: '#555',
        marginBottom: 8,
        fontStyle: 'italic',
    },
    description: {
        fontSize: 14,
        color: '#777',
        textAlign: 'center',
    },
});