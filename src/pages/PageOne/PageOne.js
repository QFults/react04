import React from 'react'
import Increment from '../../components/Increment'
import Decrement from '../../components/Decrement'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap'

const PageOne = () => {
  return (
    <Container>
      <Row>
        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </Jumbotron>
      </Row>
      <Row>
        <Col>
          <Increment />
        </Col>
        <Col>
          <Decrement />
        </Col>
      </Row>
    </Container>
  )
}

export default PageOne
