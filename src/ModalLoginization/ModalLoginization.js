import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import s from './ModalLoginization.module.css'

export let ModalContainer = (props) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const clickHandler = () => {
            handleShow();
            props.getUserName();

        }

        return (

            <>
                <Button
                    variant="primary"
                    onClick={clickHandler}

                >Авторизация</Button>

                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Авторизация</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>

                            <div className={s.group}>
                                <h4> добро пожаловать {props.userName}</h4>
                            </div>

                            <div className={s.group}>
                                <input type="text" required/>
                                <span className={s.highlight}></span>
                                <span className={s.bar}></span>
                                <label>введите пароль</label>
                            </div>

                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">Войти</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

;