import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export let ModalCreateNewRecipes = (props) => {

        let getInputValue = () => {
            let crs = document.getElementById('crs').value
            let title = document.getElementById('title').value
            let ingredient = document.getElementById('ingredient').value
            let difficult = document.getElementById('difficult').value
            let recipe = document.getElementById('recipe').value

            props.addToServer(crs, title, ingredient, difficult, recipe)
        }


        return (
            <>
                <Modal
                    show={props.show}
                    onHide={props.handler}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Создать рецепт</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div>
                                <input id="crs" type="text" placeholder={"ссылка на изображение"}/>
                            </div>
                            <div>
                                <input id="title" type="text" placeholder={"название"}/>
                            </div>
                            <div>
                                <input id="ingredient" type="text" placeholder={"ингридиенты, через пробел"}/>
                            </div>
                            <div>
                                <input id="difficult" type="text" placeholder={"сложность"}/>
                            </div>
                            <div>
                                <input id="recipe" type="text" placeholder={"рецепт"}/>
                            </div>
                        </form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handler}>Отмена</Button>
                        <Button variant="primary" onClick={() => {
                            props.handler()
                            getInputValue()
                        }


                        }
                        >Добавить</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

;