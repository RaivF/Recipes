import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from './ModalCreateNewRecipes.module.css'

export let ModalCreateNewRecipes = (props) => {

        return (
            <>

                <Modal
                    show={props.show}
                    onHide={props.handler}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>

                           создать рецепт
                           <div> <input type="text"/></div>
                           <div> <input type="text"/></div>
                           <div> <input type="text"/></div>


                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.handler}>
                            Close
                        </Button>
                        <Button variant="primary">Войти</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

;