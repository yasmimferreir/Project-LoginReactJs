import React, { useState } from "react";
import Input from "../../components/input";
import Button from "../../components/button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/userAuth";

const Singup = () => {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const { singUp } = useAuth();

    const handleSingup = () => {
        if (!email | !emailConf | !senha) {
            setError("Preencha todos os campos");
            return;
        } else if (email !== emailConf) {
            setError("os emails nao sao iguais");
            return;
        };

        const res = singUp(email, senha);

        if (res) {
            setError(res);
            return;
        }

        alert("Usuário cadastrado com sucesso!");
        navigate("/");
    };


    return (
        <C.Container>
            <C.Label>SEJA BEM-VINDO(A)</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />

                <Input
                    type="email"
                    placeholder="Confirme seu email"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                />

                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.labelError>{error}</C.labelError>
                <Button Text="Inscrever-se" onClick={handleSingup} />
                <C.LabelSing>
                    Já tem uma conta?
                    <C.Strong>
                        <Link to="/sing">&nbsp;Entre</Link>
                    </C.Strong>
                </C.LabelSing>
            </C.Content>
            <C.footer>©2022 desenvolvedora Yasmim Ferreira Costa</C.footer>
        </C.Container>

    );
};


export default Singup;