import React from "react"
import styled from "styled-components"

import { Row, Col } from 'reactstrap'

import Layout from "../components/layout"

const PageTitle = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`

const Pitch = styled.h3`
  text-align: center;
`

const ServicesWrapper = styled.p`
  text-align: center;
`

export default function Services() {
  return (
    <Layout>
      <PageTitle>Sales Page</PageTitle>
      <Row>
        <Col>
          <Pitch>Coming Soon!</Pitch>
        </Col>
      </Row>
      <Row>
        <Col>
          <ServicesWrapper>List of services goes here...</ServicesWrapper>
        </Col>
      </Row>
    </Layout>
  )
}