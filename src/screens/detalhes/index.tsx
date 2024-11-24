import React from "react";
import { FlatList } from "react-native";
import { DetalhesProps, StackNavigation } from "../../routes/app.routes";
import { RouteProp, useRoute } from "@react-navigation/native";
import { CardDetalhes } from "../../components/CardDetalhes/CardDetalhes";

export type DetalhesScreenProps = {
    navigation: DetalhesProps,
    route: RouteProp<StackNavigation>
}

type DetalhesScreenRouteProp = RouteProp<StackNavigation, "Detalhes">

export const Detalhes = () => {

    const route = useRoute<DetalhesScreenRouteProp>();
    const { id } = route.params;

    const DATA = [
       { id: "1",
        componente: <CardDetalhes id={id}/>}
    ]

    return (
        <>
            <FlatList
                data={DATA}
                renderItem={({ item }) => item.componente}
                keyExtractor={item => item.id}
            />
            
        </>
    );
};
