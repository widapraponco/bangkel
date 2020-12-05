import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        // margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 75px`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            fontSize: '30px',
            fontWeight: `bold`,
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {siteTitle.toUpperCase()}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
