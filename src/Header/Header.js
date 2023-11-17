import React, {useState} from "react";
import s from './Header.module.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ModalContainer} from "../ModalLoginization/ModalLoginization";

export let Header = (props) => {
    const [userName,setUserName] = useState("")
    let getUserName = () => {

        setUserName( '"'+ document.getElementById("filterWord").value+ '"')
    }

   let setFilterWords = ()=>{
       props.setFilterWord(document.getElementById("filterWord").value)
   }

    return (
        <Navbar
            className="justify-content-around"
            style={{width: '99vw', margin: "0 auto", display: "flex", background: "darkgrey"}}
        >
            <Form inline>
                <InputGroup>

                    <Form.Control
                        id="inputUserName"
                        placeholder="Имя пользователя"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <ModalContainer
                        userName={userName}
                        getUserName={getUserName}
                    />
                </InputGroup>
            </Form>
            <Form inline>
                <Row>
                    <Col xs="auto">
                        <Form.Control

                            type="text"
                            placeholder="Найти"
                            className=" mr-sm-2"
                            id={"filterWord"}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button   onClick={()=>{setFilterWords()}}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </Navbar>
    )
}