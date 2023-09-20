import React, {useState} from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from "react-bootstrap/Button";
import {Spinner} from "react-bootstrap";
import s from "./BlockRecipes.module.css"
import {ModalRecipesInfo} from "./ModalRecipesInfo/ModalRecipesInfo";

export let BlockRecipes = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let variantDifficulty = props.difficulty === "сложно" ? "danger" :
        props.difficulty === "средне" ? "warning" : "info"

    let callbackModalOpen = ()=>{
        handleShow()
    }
    let callbackModalClose = ()=>{
        handleClose()
    }

    return (
        <CardGroup>
            <Card className={s.card}
           >
                <Card.Img variant="top" src={props.src}/>
                <Card.Body
                    className={s.cardBody}
                    onClick={()=>{callbackModalOpen()}}
                >
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description.map((el)=>{
                            return <div>{el}</div>
                        })}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className={s.cardFooter}>
                    <big className="text-muted" style={{display: "flex"}}>
                        <Spinner animation="grow" variant={variantDifficulty} style={{margin: "0 20px 0 0"}}/>
                        {props.difficulty}
                    </big>
                    <Button variant="info">&#9825;</Button>{' '}
                </Card.Footer>
            </Card>
            <ModalRecipesInfo
                show={show}
                name={props.name}
                ingredient={props.description}
                callbackModalClose={callbackModalClose}
            />
        </CardGroup>
    )
}