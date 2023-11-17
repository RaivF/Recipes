import React, {useState} from "react";
import {BlockRecipes} from "../BlockRecipes/BlockRecipes";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NewRecipes} from "../NewRecipes/NewRecipes";


export let MainBlockRecipes = (props) => {


    let clickOnCreate = () => {
        props.callback()
    }
    let result
    if (props.findWord !== "") {
        result = props.recipes.filter((word) => word.name === props.findWord)
    } else {
        result = props.recipes
    }


    return (
        <Container>
            <Row>
                <Col style={{display: "flex", flexWrap: "wrap"}}>
                    {result.map((el) => {
                        return (
                            <BlockRecipes
                                name={el.name}
                                src={el.src}
                                ingredient={el.ingredient}
                                difficulty={el.difficulty}
                                recipe={el.recipe}
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