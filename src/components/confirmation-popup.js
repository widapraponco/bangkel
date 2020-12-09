
import React from "react"
import { Modal } from 'react-bootstrap';
import Image from "../components/image"

const ConfirmationPopup = ({success, ...props}) => <>
<Modal {...props} centered size="md">
    <Modal.Body>
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div style={{width: `300px`}}>
                <Image src={success ? "confirm.png" : "error.png"} />
            </div>
            <h4>Hore, Permintaan anda berhasil!</h4>  
            <p style={{fontSize: `15px`, textAlign: `center`}}>
                kami akan segera menghubungimu melalui nomor Whatsapp/Telegram yang telah anda cantumkan pada formulir sebelumnya untuk melakukan konfirmasi
            </p>
        </div>
    </Modal.Body>
</Modal>
</>;

export default ConfirmationPopup;