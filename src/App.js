import './App.module.css';
import {Header} from "./Header/Header";
import {MainBlockRecipes} from "./MainBlockRecipes/MainBlockRecipes";
import s from './App.module.css'
import {NewRecipes} from "./NewRecipes/NewRecipes";
import {ModalContainer} from "./Modal/Modal";
import {ModalCreateNewRecipes} from "./ModalCreateNewRecipes/ModalCreateNewRecipes";
import {useState} from "react";
import axios from "axios";


function App() {
    const [show, setShow] = useState(false);
    const [recipes, setRecipes] = useState([{name: "eror", crs: "", description: ["eror"], difficulty: "eror"}]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let callback = () => {
        handleShow()
    }
    if (recipes[0].name === "eror") {
        axios.get("https://650580a1ef808d3c66f01d91.mockapi.io/api/v1/recipes")
            .then(response => {
                setRecipes(response.data)
            })
    }
    return (
        <div className={s.MainContainer}>
            <Header/>
            <MainBlockRecipes
                callback={callback}
                recipes={recipes}/>
            <ModalCreateNewRecipes
                show={show}
                handler={handleClose}
            />

        </div>
    );
}

export default App;
