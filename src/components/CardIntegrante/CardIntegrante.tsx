import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

type CardIntegranteProps = {
    name: string;
    image: string;
    position: string;
    description: string;
    linkedin: string; 
    github: string;
    onPress: () => void;
};

export const CardIntegrante: React.FC<CardIntegranteProps> = ({ 
    name, image, position, description, linkedin, github, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.position}>{position}</Text>
                <Text style={styles.description}>{description}</Text>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => Linking.openURL(linkedin)}>
            </TouchableOpacity> 
                <TouchableOpacity onPress={() => Linking.openURL(github)}>
            </TouchableOpacity>
        </View> 
    </TouchableOpacity>
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
    iconContainer: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,
      },
});