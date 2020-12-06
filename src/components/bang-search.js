
import React, { Fragment } from "react"
// import PropTypes from "prop-types"
import {InputGroup, Button} from 'react-bootstrap';
import { Typeahead, Highlighter } from 'react-bootstrap-typeahead';

const BangSearch = () => {
    const options = [
        {name: 'A', value: 2},
        {name: 'B', value: 2},
        {name: 'C', value: 2},
        {name: 'D', value: 2},
        {name: 'E', value: 2},
    ]

    const props = { renderMenuItemChildren: (option, { text }, index) => (
        <Fragment>
          <Highlighter search={text}>
            {option.name}
          </Highlighter>,
          <div>
            <small>
              Population:
            </small>
          </div>
        </Fragment>
      )};

    return <InputGroup className="mb-3 bang-search">
    <Typeahead
      style={{
        flex: `1`
      }}
      {...props}
      id="layanan-bangkel"
      labelKey="name"
      size={'small'}
      options={options}
      placeholder="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
      aria-label="Cuci Mobil, Cuci Motor, Gantil Oli, Tambal ban, dll"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="danger">ATUR JANJI</Button>
    </InputGroup.Append>
  </InputGroup>;
}

export default BangSearch;