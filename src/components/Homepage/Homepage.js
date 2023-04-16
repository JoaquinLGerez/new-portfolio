import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Logo from '../../Assets/logo.svg'

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hola <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>Soy Joaquin Gerez</h2>
            <span></span>
            <Text />
            <button onClick={() => {
              window.open("https://github.com/joaquinlgerez");
            }}
              className='socailmediabtn'><AiFillGithub className='icon' style={{ filter: 'invert(1)'}} /></button>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/joaquin-gerez/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' style={{ filter: 'invert(1)'}} /></button>
            <button onClick={() => {
              window.open("https://bigho.space");
            }}
              className='socailmediabtn bigho'><img style={{width: '27px', filter: 'invert(1)'}} src={Logo} />
              </button>
            {/* <button onClick={() => {
              window.open("https://instagram.com/rahulvijay81");
            }}
              className='socailmediabtn'><AiFillInstagram className='icon' /></button> */}
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home