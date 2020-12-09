/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import BangSearch from "../components/bang-search";
import ConfirmationPopup from "../components/confirmation-popup";
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

  const [isSubmited, setSubmit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmitService = () => {
    setSubmit(true);
    setTimeout(() => {
      setSubmit(false);
      setShowConfirm(true);
    }, 3000);


  }

  return (
    <>
    <ConfirmationPopup show={showConfirm} success={true} onHide={() => setShowConfirm(false)}/>
      {
          isSubmited ?
              <div className="overlay-loading">
                  <Spinner animation="grow" variant="danger" />
              </div> : <></>
      }
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>
          <Container fluid>
            <Row>
              <Col md={6} style={{
                paddingLeft: `75px`,
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                justifyContent: `center`
              }}>
                <h4 className="mb-4">Perbaikan dan Perawatan Kendaraan Mudah dan Terjadwal</h4>
                <p className="mb-4">Rawat kendaraan anda tanpa antri dan tanpa mengganggu kesibukan anda. Serahkan perawatan secara optimal kepada kami</p>
                <BangSearch onSubmit={handleSubmitService}/>
              </Col>
              <Col 
                className="figure"
                style={{
                  minHeight: `calc(100vh - 150px)`
                }}>
              </Col>
            </Row>
          </Container>
          {children}
        </main>
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
                <BangSearch onSubmit={handleSubmitService}/>
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
