import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";

export function ModalRecipesInfo(props) {


    return (
        <>
            <Modal show={props.show} onHide={props.callbackModalClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card.Img variant="top" src={props.src}/>
                    <div><h5>Ингредиенты:</h5></div>
                   <div>{props.ingredient.map((el)=>{
                        return <div>{el}</div>
                    })}
                       </div>
                    <h5>Способ приготовления</h5>
                    <ul>
                        {props.recipe.map((el)=>{
                            return <li>{el}</li>
                        })}
                    </ul>
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

