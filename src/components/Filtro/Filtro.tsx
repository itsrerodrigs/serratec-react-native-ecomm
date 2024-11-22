import { View, TextInput, StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export const Filtro = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchSection}>
                <Feather style={styles.searchIcon} name="search" size={16} color="black" />
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
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "flex-start",
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        marginTop: 12,
        height: 45,
        width: '80%',
    },
    searchIcon: {
        paddingLeft: 5,
    },
    input: {
        height: 40,
        margin: 12,
        marginLeft: 0,
        padding: 10,
        borderRadius: 5,
        borderWidth: 0,
        fontSize: 12,
    }
});
