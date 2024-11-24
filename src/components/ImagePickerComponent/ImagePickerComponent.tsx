import React, { useState, useEffect } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const usuarioPadrao = "https://static.vecteezy.com/system/resources/thumbnails/004/511/281/small_2x/default-avatar-photo-placeholder-profile-picture-vector.jpg";

export const ImagePickerComponent = () => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        const loadImage = async () => {
            try {
                const savedImage = await AsyncStorage.getItem('savedImage');
                if (savedImage !== null) {
                    setImage(savedImage);
                }
            } catch (error) {
                console.log('Error loading image from storage:', error);
            }
        };

        loadImage();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images', 'videos'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const uri = result.assets[0].uri;
            setImage(uri);
            try {
                await AsyncStorage.setItem('savedImage', uri);
            } catch (error) {
                console.log('Error saving image to storage:', error);
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonGallery} onPress={pickImage}>
                <Text style={{color: "#114552", fontSize: 16,}}>ESCOLHA UMA IMAGEM DA SUA GALERIA</Text>
            </TouchableOpacity>
            {image === null ? 
                <Image source={{ uri: usuarioPadrao }} style={styles.image} /> 
                : 
                <Image source={{ uri: image }} style={styles.image} />
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    buttonGallery: {
        width: "100%",
        height: 50,
        backgroundColor: "#bdd4cf",
        borderColor: "#43d3aa",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        padding: 6,
        marginBottom: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
});
