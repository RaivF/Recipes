import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {BlockRecipes} from "../BlockRecipes";

export function ModalRecipesInfo(props) {

    return (
        <>
            <Modal show={props.show} onHide={props.callbackModalClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.ingredient.map((el)=>{
                        return <div>{el}</div>
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.callbackModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

