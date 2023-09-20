import React from "react";
import s from './MainBlockRecipes.module.css'
import {BlockRecipes} from "../BlockRecipes/BlockRecipes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NewRecipes} from "../NewRecipes/NewRecipes";


export let MainBlockRecipes = (props) => {

    let clickOnCreate = () =>{
       props.callback()
    }

    return (
        <Container>
            <Row>
                <Col style={{display: "flex", flexWrap: "wrap"}}>
                    { props.recipes.map((el) => {
                        return (
                            <BlockRecipes
                                name={el.name}
                                src={el.src}
                                description={el.description}
                                difficulty={el.difficulty}
                            />
                        )
                    })}

                    <NewRecipes
                        clickOnCreate={clickOnCreate}
                    />
                </Col>
            </Row>

        </Container>

    )
}