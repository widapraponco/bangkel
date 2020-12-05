/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer style={{
          // marginTop: `2rem`,
          backgroundColor: `#C4C4C4`
        }}>
          <Container>
            <Row className="py-4">
              <Col>
                <div className="d-flex flex-column">
                  <h1 style={{ margin: 0 }}>
                    <Link
                      to="/"
                      style={{
                        fontSize: '30px',
                        color: `black`,
                        textDecoration: `none`,
                      }}
                    >
                      {(data.site.siteMetadata?.title || `Title`).toUpperCase()}
                    </Link>
                  </h1>
                  <p style={{paddingRight: `75px`}}>
                    CV. General Service Engineering
                    Perum. Taman Aloha Blok B5 no. 1
                    Kecamatan Sukodono, Kabupaten Sidoarjo
                    61257
                  </p>
                </div>
              </Col>
              <Col className="d-flex align-items-center justify-content-center">
                <InputGroup className="mb-3 bang-search">
                  <FormControl
                    placeholder="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
                    aria-label="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="danger">ATUR JANJI</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex align-items-center justify-content-center pb-2" style={{fontSize: `14px`, fontWeight: `bold`}}>
                © {new Date().getFullYear()+', Powered By - '} <a href="http://www.klepon.tech" target="blank" style={{color: `rgb(12 119 73)`}}>{' Klepon.Tech'}</a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
