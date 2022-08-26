import React from "react";
import * as C from "./styles";

//propriedades
const Button = ({ Text, onClick, Type = "button" }) => {
    return (
        <C.Button type={Type} onClick={onClick}>
            {Text}
        </C.Button>
    );
};

export default Button;