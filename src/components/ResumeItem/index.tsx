import React from "react";
import { Container, Title, Conteudo } from "./styles";

type Props = {
    title: string;
    value: number;
    color?: string;
}

const ResumeItem = ({title, value, color}: Props) =>{
    return(
        <Container>
            <Title>{title}</Title>
            <Conteudo color={color}>R$ {value}</Conteudo>
        </Container>
    );
}

export default ResumeItem;