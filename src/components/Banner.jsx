import React from 'react'
import { useState, useEffect } from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'


import Typed from 'react-typed'

import '../App.css'

const Banner = () => {
  const toRotate = ["Web Developer", "Blockchain Developer", "Drone Enthusiast"];
  
  return (
    <div className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6}>
                    <span className='tagline'>Hello and Welcome!</span>
                    <h1 className='text-start'>Hi I'm a </h1>
                    <h1 className='text-start'>
                    <Typed 
                        strings={[...toRotate]}
                        typeSpeed={120}
                        backspeed={100}
                        loop
                    />
                    </h1>
                    <Button onClick={() => console.log("clicked")} >Let's Connect</Button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Banner