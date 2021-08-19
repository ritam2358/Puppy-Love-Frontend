import React from 'react'
import { Col, Container, Row, Form, Button, Card } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap-floating-label'
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
    return (
        <div>
            <div className="entirepage">
                <Container>
                    <Row className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                        <Col xs="12" lg="5" className="ml-auto mr-auto">
                            <Card className="logincard">
                                <Card.Body>
                                    <Card.Title className="logintitle" style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '20px' }}>Puppy Love</Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <FloatingLabel controlId="floatingInput"
                                                    label="User Id">
                                                    <Form.Control placeholder="Enter Login Id" />
                                                </FloatingLabel>

                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <FloatingLabel controlId="floatingInput"
                                                    label="Password" type="password">
                                                    <Form.Control type="password" placeholder="Password" />
                                                </FloatingLabel>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="radio" label="I agree to the terms and conditions" />
                                            </Form.Group>
                                            <Link to="/dashboard">
                                                <button className="buttonlogin">
                                                    Log In
                                                </button>
                                            </Link>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default LoginPage
