import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Casa";
import Sing from "../pages/sign";
import SingUp from "../pages/singUp";
import useAuth from "../hooks/userAuth";

//const para verificar se está logado ou nao
// caso nao esteja vai ser direcionado return para a tela singUp
//caso esteja logado será direcionado para Item=Home para tela Home
const Private = ({ Item }) => {
    const {singned} = useAuth();
    return singned > 0 ? <Item /> : <Sing />;
};


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Sing />} />
                    <Route exact path="/SingUp" element={<SingUp />} />
                    <Route path="*" element={<Sing />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
};

export default RoutesApp;