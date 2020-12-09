
import React, { Fragment, useState, useRef } from "react"
// import PropTypes from "prop-types"
import { graphql, useStaticQuery } from 'gatsby';
import {InputGroup, Button, Overlay, Tooltip} from 'react-bootstrap';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';
import { FaCar, FaBicycle, FaMotorcycle, FaSearch } from 'react-icons/fa';

import AppointmentForm from "./appointment-form";
import 'bootstrap/dist/css/bootstrap.min.css';

const BangSearch = (props) => {
    const data = useStaticQuery(graphql`
    query {
      allMysqlServices {
        edges {
          node {
            name
            subcategory
          }
        }
      }
    }
  `);

  const options = data.allMysqlServices.edges
    .filter(edge => !!edge.node)
    .map(edge => edge.node);

  const getIcon = (subcategory) => {
    switch(subcategory) {
      case 'sepeda': return <FaBicycle />;
      case 'sepeda motor': return <FaMotorcycle />;
      default: return <FaCar />;
    }
  }

  const typeProps = { renderMenuItemChildren: (option, { text }, index) => (
      <div role="button" tabIndex={0} className="d-flex justify-content-between" onKeyDown={() => {setModalShow(true); setTooltipShow(false)}} onClick={() => {setModalShow(true); setTooltipShow(false)}}>
        <div className="d-flex flex-column">
          <Fragment>
            <Highlighter search={text}>
              {option.name}
            </Highlighter>
            <div>
              <small>
                layanan : {option.subcategory}
              </small>
            </div>
          </Fragment>
        </div>
        <span style={{
          display: `flex`,
          alignItems: `center`,
          fontSize: `30px`,
          color: `red`
        }}>
          {getIcon(option.subcategory)}
        </span>
      </div>
  )};

  const [modalShow, setModalShow] = useState(false);
  const [tooltipShow, setTooltipShow] = useState(false);
  const [selectedService, setService] = useState(undefined);
  const target = useRef(null);
  
  return (
    <>
  <InputGroup className="mb-3 bang-search">
    <Typeahead
      style={{
        flex: `1`
      }}
      {...typeProps}
      id="layanan-bangkel"
      labelKey="name"
      size={'small'}
      options={options}
      name="selectedService"
      value={selectedService}
      onChange={(e) => setService(e[0])}
      placeholder="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
      aria-label="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button ref={target} role="button" variant="danger" onClick={() => {setModalShow(selectedService !== undefined); setTooltipShow(selectedService === undefined)}}>
        <FaSearch /> Cari Layanan
      </Button>
      <Overlay target={target.current} show={tooltipShow} placement="top">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Pilih satu layanan pada kolom disamping untuk atur janji
          </Tooltip>
        )}
      </Overlay>
    </InputGroup.Append>
  </InputGroup>

  <AppointmentForm show={modalShow} service={selectedService} onHide={(e) => {
    setModalShow(false);
    //is submit with data
    console.log(e);
    if (e) props.onSubmit(e);
  }}/>
  </>);
}

export default BangSearch;