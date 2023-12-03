import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './grid.css'

export default function GridExample() {
  return (
    <Container>
      <Row>
        <Col className='col-color' xs={12} md={8}>
          xs=12 md=8
        </Col>
        <Col className='col-color' xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      <Row>
        <Col className='col-color' xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className='col-color' xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col className='col-color' xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>
      <Row>
        <Col className='col-color' xs={6}>xs=6</Col>
        <Col className='col-color' xs={6}>xs=6</Col>
      </Row>
      <Row>
        <Col className='col-color' md={11} xs={4}>xs=4 md=11</Col>
        <Col className='col-color' md={11} xs={4}>xs=4 md=11</Col>
        <Col className='col-color' md={1} xs={4}>xs=4 md=1</Col>
      </Row>
    </Container>
  )
}
