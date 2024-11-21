import { useEffect, useState } from "react";
import { Produto, URL } from "../FlatListProdutos/FlatListProdutos";
import { Image, View, StyleSheet, Text, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { api1 } from "../../services/api";

type CardDetalhesProps = {
    id: string;
};

export const CardDetalhes = ({ id }: CardDetalhesProps) => {
    const [produto, setProduto] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);
    
    const [nome, setNome] = useState("");
    const [imagem, setImagem] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [valor, setValor] = useState("");

    const obterProduto = async () => {
        try {
            const { data } = await api1.get(`${URL}/produtos/${id}`);
            setProduto(data);
            
            setNome(data.nome);
            setImagem(data.imagem);
            setQuantidade(data.quantidade.toString());
            setValor(data.valor.toString());
        } catch (err) {
            console.log("Erro ao buscar o produto:", err);
        }
        setLoading(false);
    };

    useEffect(() => {
        obterProduto();
    }, [id]);

    const salvarAlteracoes = async () => {
        const novoProduto = {
            nome: nome,
            imagem: imagem,
            quantidade: parseInt(quantidade, 10),
            valor: parseFloat(valor),
        };

        try {
            const response = await api1.put(`${URL}/produtos/${id}`, novoProduto);
            Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
            setProduto(response.data);
        } catch (err) {
            console.log("Erro ao atualizar o produto:", err);
            Alert.alert('Erro', 'Não foi possível atualizar o produto.');
        }
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (!produto) {
        return (
            <View style={styles.container}>
                <Text>Produto não encontrado</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.nome}>{produto.nome}</Text>
            <Image style={styles.imagem} source={{ uri: produto.imagem }} />
            <View style={styles.containerForm}>
                <Text style={styles.textLabel}>Produto:</Text>
                <TextInput 
                    style={styles.input} 
                    value={nome} 
                    onChangeText={setNome} 
                />
                <Text style={styles.textLabel}>Imagem:</Text>
                <TextInput 
                    style={styles.input} 
                    value={imagem} 
                    onChangeText={setImagem} 
                />
                <Text style={styles.textLabel}>Quantidade:</Text>
                <TextInput 
                    style={styles.input} 
                    value={quantidade} 
                    onChangeText={setQuantidade} 
                    keyboardType="numeric"
                />
                <Text style={styles.textLabel}>Valor:</Text>
                <TextInput 
                    style={styles.input} 
                    value={valor} 
                    onChangeText={setValor} 
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity style={styles.botaoEnviar} onPress={salvarAlteracoes}>
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 12,
        padding: 12,
        gap: 16,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    nome: {
        fontSize: 26,
        fontWeight: 900,
    },
    imagem: {
        width: 300,
        height: 200,
        marginTop: 10,
        borderRadius: 6,
    },
    containerForm: {
        alignItems: "flex-start",
        justifyContent: "center",
        width: "100%",
        gap: 10,
    },
    textLabel: {
        fontSize: 16,
        fontWeight: 600,
    },
    input: {
        width: "100%",
        height: 50,
        borderColor: "#43d3aa",
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: "#041515",
        backgroundColor: "#e7e7e746",
    },
    botaoEnviar: {
        padding: 20,
        width: "100%",
        backgroundColor: "#bdd3ce",
        borderColor: "#43d3aa",
        borderWidth: 1,
        alignItems: "center",
        borderRadius: 5,
    },
});
