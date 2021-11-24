import styled from "styled-components";

export const Container = styled.div`
background-color: white;
box-shadow: 0 0 5px #CCC;
border-radius: 10px;
padding: 20px;
margin-top: 20px;
`;

export const InputLabel = styled.label`
    
    margin: 10px;
`;
export const InputTitle = styled.div`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Input = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
export const Select = styled.select`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    font-size: 14px;
`;
export const Button = styled.button`
    width: 100%;
    height: 30px;
    padding: 0 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;