import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";
import template from "../../imgs/login.svg";

import {
    Image,

} from './styles'


const Sing = () => {
    const { sing } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");


    const handleLogin = () => {
        if (!email | !senha) {
            setError("Preencha todos os campos");
            return;
        }

        const ress = sing(email, senha)
        if (ress) {
            setError(ress);
            return;
        }

        navigate("/home");
    };

    return (
        <C.Container>
            <C.Label>SEJA BEM-VINDO(A)</C.Label>
            <C.Content>
                <Image alt="logo-imagem" src={template}></Image>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Entrar" onClick={handleLogin} />
                <C.LabelSingup>
                    Nao tem conta?
                    <C.Strong>
                        <Link to="/singUp">&nbsp;Registre-se</Link>
                    </C.Strong>
                </C.LabelSingup>
            </C.Content>
            <C.footer>©2022 desenvolvedora Yasmim Ferreira Costa</C.footer>
        </C.Container>
    );
};

export default Sing;