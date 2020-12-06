import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import {Container, Row, Col, Button} from 'react-bootstrap';
import BangSearch from "../components/bang-search";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/bangkel.css"
// import Step1 from "../assets/step1.svg"
// import Step2 from "../assets/step2.svg"
// import Step3 from "../assets/step3.svg"

const steps = [
  { alt: 'step1', src: "step1.png", text: 'Cari layanan yang diinginkan melalui website' },
  { alt: 'step2', src: "step2.png", text: 'Setelah memilih layanan, anda akan diarahkan menuju aplikasi chat whatsapp/telegram kemudiam Atur jadwal' },
  { alt: 'step3', src: "step3.png", text: 'Tunggu kami datang dan mengerjakan tugas kami, kemudian kendaraanmu siap digunakan' }
];

const IndexPage = () => (
  <Layout>
    <SEO title="Bangkel Bengkel Pilihan" />

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
          <BangSearch />
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
            <Col key={o.alt} md={4}>
              <div className="d-flex flex-column">
                <div style={{
                  height: `200px`, 
                  width: `200px`,
                  margin: `0 auto`,
                  marginBottom: `1.45rem`}}>
                  <Image src={o.src} alt={o.alt} />
                </div>
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
