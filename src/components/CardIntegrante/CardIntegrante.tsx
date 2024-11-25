import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CardIntegranteProps = {
    name: string;
    image: string;
    position: string;
    description: string;
    linkedin: string; 
    github: string;
    iconLinkedIn: string; 
    iconGitHub: string;
};

export const CardIntegrante: React.FC<CardIntegranteProps> = ({ 
    name, image, position, description, linkedin, github, iconLinkedIn, iconGitHub}) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.position}>{position}</Text>
                <Text style={styles.description}>{description}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => Linking.openURL(linkedin)} style={styles.iconButton}>
                <Ionicons name="logo-linkedin" size={24} color="#114552" />
                </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL(github)} style={styles.iconButton}>
                <Ionicons name="logo-github" size={24} color="#114552" />
                </TouchableOpacity>
            
        </View> 
    </View>
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
      iconButton: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
    },
});