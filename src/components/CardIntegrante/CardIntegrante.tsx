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
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#114552'
    },    
    card: {
        backgroundColor: '#bdd4cf',
        borderRadius: 10,
        padding: 20,
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
        color: "#1e6458"
    },
    position: {
        fontSize: 15,
        color: '#20788a',
        marginBottom: 8,
        fontStyle: 'italic',
    },
    description: {
        fontSize: 14,
        color: '#56625d',
        textAlign: 'center',
        marginBottom: 10,
    },
    iconContainer: { 
        flexDirection: 'row', 
        justifyContent: 'center', 
        marginTop: 10,
      },
});