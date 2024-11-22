import { View, TextInput, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export const Filtro = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <Feather style={styles.searchIcon} name="search" size={24} color="black" />
                <TextInput
                    style={styles.input}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#093579"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        margin: 12,
        height: '8%',
        width: '90%',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0,
    }
});
