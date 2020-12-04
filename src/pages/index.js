import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/bangkel.css"
import step1 from "../assets/step1.svg"
import step2 from "../assets/step2.svg"
import step3 from "../assets/step3.svg"

const steps = [
  { alt: 'step1', svg: step1, text: 'Cari layanan yang diinginkan melalui website' },
  { alt: 'step2', svg: step2, text: 'Setelah memilih layanan, anda akan diarahkan menuju aplikasi chat whatsapp/telegram kemudiam Atur jadwal' },
  { alt: 'step3', svg: step3, text: 'Tunggu kami datang dan mengerjakan tugas kami, kemudian kendaraanmu siap digunakan' }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Bangkel Bengkel Online" />

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
        <Col 
          className="figure"
          style={{
            minHeight: `calc(100vh - 150px)`
          }}>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center mb-3">
          <span style={{
            fontWeight: `bold`,
            fontSize: `30px`
          }}>Bagaimana Caranya ?</span>
        </Col>
      </Row>
      <Row style={{padding: `0 75px 0 75px`}}>
        {
          steps.map(o => 
            <Col md={4}>
              <div className="d-flex flex-column">
                <img src={o.svg} height={200} alt={o.alt} />
                <span style={{
                  textAlign: `center`,
                  padding: `10px 20px`
                }}>{o.text}</span>
              </div>
            </Col>
          )
        }
      </Row>
      <Row style={{height:`100vh`}}>
        <Col className="cleaning h-100 d-flex flex-column justify-content-center"></Col>
        <Col style={{paddingRight: `75px`}} className="d-flex flex-column align-items-start justify-content-center">
          <h4 className="mb-3">Layanan Cuci Kendaraan</h4>
          <p className="mb-3">Mobil, Sepeda Motor, Sepeda anda akan dicuci dengan sebaik mungkin dengan menggunakan bahan dan alat berkualitas sehingga kendaraan anda siap untuk digunakan di jalanan</p>
          <Button variant="danger" style={{fontSize:`12px`, fontWeight: `bold`}}>ATUR JANJI</Button>
        </Col>
      </Row>
      <Row style={{height:`100vh`}}>
        <Col className="d-flex flex-column align-items-start justify-content-center" style={{paddingLeft: `75px`}}>
          <h4 className="mb-3">Perbaikan dan Perawatan Kendaraan</h4>
          <p className="mb-3">Mobil, Sepeda Motor, Sepeda anda membutuhkan aki baru, ganti oli, spare part baru akan kami sediakan demi menunjang kendaraan anda agar performa kendaraan ketika digunakan menjadi lebih nyaman dan aman</p>
          <Button variant="danger" style={{fontSize:`12px`, fontWeight: `bold`}}>ATUR JANJI</Button>
        </Col>
        <Col className="repairing h-100 d-flex flex-column justify-content-center"></Col>
      </Row>
    </Container>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
