
import Card from 'react-bootstrap/Card';
import CardGroup from "react-bootstrap/CardGroup";
import s from "../BlockRecipes/BlockRecipes.module.css";

import React from "react";

export let NewRecipes = (props) => {
    return (
        <CardGroup
            onClick={props.clickOnCreate}
        >
            <Card className={s.card}>
                <Card.Img variant="top" src={"https://media.sandollcloud.com/static/images/brand/contents/doctorfont_branding_1x1.png"}/>
                <Card.Body>
                    <Card.Title>{"Добавить рецепт "}</Card.Title>
                </Card.Body>
                <Card.Footer className={s.cardFooter}>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

