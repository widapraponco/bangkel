
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Modal } from 'react-bootstrap';
import Image from "../components/image"

const ConfirmationPopup = ({success, ...props}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
                confirm {
                    title
                    description
                }
                error {
                    title
                    description
                }
            }
        }
    }`)

    const {confirm, error} = data.site.siteMetadata;
    return (<>
    <Modal {...props} centered size="md">
        <Modal.Body>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div style={{width: `300px`}}>
                    <Image src={success ? "confirm.png" : "error.png"} />
                </div>
                <h4>{success ? confirm.title : error.title}</h4>  
                <p style={{fontSize: `15px`, textAlign: `center`}}>
                    {success ? confirm.description : error.description}
                </p>
            </div>
        </Modal.Body>
    </Modal>
    </>);
}

export default ConfirmationPopup;