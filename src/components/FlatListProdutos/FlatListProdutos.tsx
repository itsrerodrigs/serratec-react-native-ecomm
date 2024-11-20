import { FlatList, View, StyleSheet } from "react-native"
import { CardProduto } from "../CardProduto/CardProduto"
import { useState } from "react";

const data = [
    {
        imagem: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjUn8ZlKl__snd2CUhBrsRuQlKiQVJs_EMRHuCvMn18bRPMQ7iSl8ii295rmKn5XslJvBhxecxmj0vYuS1mx0XOClEaV6v2g&usqp=CAE",
        nome: "Funko 1607",
        quantidade: 18,
        valor: 110.90
    },
    {
        imagem: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSE_N5Oj8d81ubvJAUFLIU5lbYqYgP0wlvvDa0p5xmzPfMEG1D7P5pBL0I8SC7v4FpZQmAr1TbX5TNMi8Q4xgqC9atiHu1rwCI73vvJpBQOOHFLdFrK3hAO&usqp=CAE",
        nome: "Funko 1341",
        quantidade: 18,
        valor: 110.90
    },
]

/*const [loading, setloading] =  useState(true);

const obterDados = async () => {
    setloading(true);
    try {
        //const { data } = await axios
    } catch (err) {
        console.log("Erro ao carregar Tarefas. ", err)
    }
}*/

const ItemSeparator = () => { return <View style={styles.separator} />; };

export const FlatListProdutos = () => {
    return (
        <View style={styles.container}>
             
            <FlatList
                data={data}
                renderItem={({ item, index}) => (
                    <>
                        <CardProduto imagem={item.imagem} nome={item.nome} quantidade={item.quantidade} valor={item.valor}/>
                    </>
                )}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightgray"
    },
    separator: {
        height: 2, 
        backgroundColor: 'gray', 
        marginHorizontal: 10,
    },
    
})