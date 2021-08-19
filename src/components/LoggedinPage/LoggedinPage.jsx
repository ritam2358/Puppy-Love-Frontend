import React from 'react'
import { Col, Container, Row, Card, Form, Button, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FloatingLabel from "react-bootstrap-floating-label";
import placeholder from '../../assets/img/placeholder.jpg'
import './LoggedinPage.css'

const LoggedinPage = () => {
    return (
        <div className="loggedpage">
            <Container className="align-items-center justify-content-center" style={{ height: '100vh' }}>
                <Card style={{ padding: '20px', borderRadius: '1.4rem' }} className="dashboardcard">
                    <Container>
                        <Row className="d-flex align-items-center justify-content-center">
                            <Col lg="6" xs="6" className="text-center">
                                <h2>Dashboard</h2>
                            </Col>
                            <Col lg="6" xs="6" className="text-center">
                                <Link to="/">
                                    <button className="student-button">
                                        Log Out
                                    </button>
                                </Link>
                            </Col>
                        </Row>
                        <Row className="toprow" style={{ padding: '30px' }}>
                            <Col lg="4" className="d-flex align-items-center justify-content-center">
                                <img src={placeholder} className="member-img" alt="" />
                            </Col>
                            <Col lg="8" className="justify-content-center align-items-center">
                                <Row className="align-items-center justify-content-center text-center my-auto">
                                    <Col lg="4">
                                        <Card className="analysis-card align-items-center justify-content-center">
                                            <Card.Text>
                                                10
                                            </Card.Text>
                                            <Card.Title>Hearts Sent</Card.Title>
                                        </Card>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="analysis-card analysis-card align-items-center justify-content-center">
                                            <Card.Text>
                                                2
                                            </Card.Text>
                                            <Card.Title>Hearts Received</Card.Title>
                                        </Card>
                                    </Col>
                                    <Col lg="4">
                                        <Card className="analysis-card analysis-card align-items-center justify-content-center">
                                            <Card.Title>Match Found/Match Not Found</Card.Title>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                        <Row >
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Search Name"
                                    >
                                        <Form.Control placeholder="Search Name" />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group>
                                    <button type="submit" className="student-button">
                                        Add
                                    </button>
                                    <button type="submit" className="student-button">
                                        Submit
                                    </button>
                                </Form.Group>
                            </Form>
                        </Row>

                        <Row>
                            <Col lg="3" xs="12">
                                <ListGroup variant="flush">
                                    <ListGroup.Item>Student 1</ListGroup.Item>
                                    <ListGroup.Item>Student 2</ListGroup.Item>
                                    <ListGroup.Item>Student 3</ListGroup.Item>
                                    <ListGroup.Item>Student 4</ListGroup.Item>
                                </ListGroup>
                            </Col>

                        </Row>

                    </Container>
                </Card>
            </Container>

        </div >
    )
}

export default LoggedinPage
