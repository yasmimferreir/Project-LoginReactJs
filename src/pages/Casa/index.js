import React from "react";
import { useNavigate} from "react-router-dom";
import Button from "../../components/button";
import useAuth from "../../hooks/userAuth";
import * as C  from "./styles";

const Home = () => {
    const { singnout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button Text="Sair" onClick={() => [singnout(), navigate("/")]} >
                Sair
            </Button>
        </C.Container>
    );

};

export default Home;