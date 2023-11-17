import './App.module.css';
import {Header} from "./Header/Header";
import {MainBlockRecipes} from "./MainBlockRecipes/MainBlockRecipes";
import s from './App.module.css'
import {ModalCreateNewRecipes} from "./ModalCreateNewRecipes/ModalCreateNewRecipes";
import {useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";


function App() {
    let [findWord,setFindWord]=useState("")
    const [show, setShow] = useState(false);
    const [users, setUsers] = useState(false);
    const [recipes, setRecipes] = useState([{
        name: "eror",
        crs: "",
        ingredient: ["ошибка загрузки с сервера"],
        difficulty: "",
        recipe: [""],
    }]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let callback = () => {
        handleShow()
    }

    let requestFromServer = () => {
        axios.get("https://650580a1ef808d3c66f01d91.mockapi.io/api/v1/recipes")
            .then(response => {
                setRecipes(response.data)
            })
    }



    let addToServer = (crs, title, ingredient, difficult, recipe) => {

        let ingredientToArr = ingredient.split(' ')
        let recipeToArr = recipe.split(' ')
        axios.post(`https://650580a1ef808d3c66f01d91.mockapi.io/api/v1/recipes`,
            {
                "src": '' + crs + '',
                "name": '' + title + '',
                "ingredient": ingredientToArr,
                "difficulty": ''+ difficult +'',
                "recipe": recipeToArr,
                "id": '' + recipes.length+1 + ''
            })
            .then(response => {
                requestFromServer()
            })

    }


    let setFilterWord = (word)=>{
        setFindWord(word)

    }


    if (recipes[0].name === "eror") {
        requestFromServer()
    }


    return (
        <div className={s.MainContainer}>
            <Header setFilterWord={setFilterWord}/>
            <MainBlockRecipes
                findWord={findWord}
                callback={callback}
                recipes={recipes}/>
            <ModalCreateNewRecipes
                show={show}
                handler={handleClose}
                addToServer={addToServer}
            />



        </div>
    );
}

export default App;
