import { useEffect, useState } from "react"
import { Produto, URL } from "../FlatListProdutos/FlatListProdutos"
import { Image, View, StyleSheet, Text, ActivityIndicator, TextInput } from "react-native"
import axios from "axios"

type CardDetalhesProps = {
    id: string
}

export const CardDetalhes = ({ id }: CardDetalhesProps) => {

    const [produto, setProduto] = useState<Produto | null>(null);
    const [loading, setLoading] = useState(true);

    const obterProduto = async () => {
        
        try {
            const { data } = await axios.get(`${URL}/produtos/${id}`)
            setProduto(data)
        } catch (err) {
            console.log("Erro ao buscar o produto:", err);
        }
        setLoading(false)
    }

    useEffect(() => {
        obterProduto();
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ?
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <ActivityIndicator size="large" />
                    </View>
                :
                (<>
                    <Text style={styles.nome}>{produto?.nome}</Text>
                    <Image style={styles.imagem} source={{uri: produto?.imagem}}/>
                    <View style={styles.containerForm}>
                        <Text>Imagem:</Text>
                        <TextInput value={produto?.imagem} />
                        <Text>Quantidade:</Text>
                        <TextInput value={produto?.quantidade.toString()} />
                        <Text>Valor:</Text>
                        <TextInput value={produto?.valor.toString()} />
                    </View>
                </>)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 12,
    },
    nome: {
        fontSize: 26,
        fontWeight:  900,
    },
    imagem: {
        width: 300,
        height: 200,
        marginTop: 10,
        borderRadius: 6,
    },
    containerForm: {
        justifyContent: "center",
        alignItems: "flex-start",
    }
})