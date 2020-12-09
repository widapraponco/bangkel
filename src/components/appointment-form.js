import React, { useState } from "react";
import {Button, Modal, Form, Row, Col} from 'react-bootstrap';
import Image from "../components/image";

const AppointmentForm = ({service, ...props}) => {
    console.log(service);
    const profileQuestion = [
        {label: "Nama", name: "name", type: "input", validate: true},
        [
            {
                label: "No. Whatsapp/Telegram", 
                name: "phone",
                type: "input", 
                text: "*Pastikan terdaftar pada Whatsapp/Telegram", 
                style: {flex: `.9`},
                validate: true
            },
            {
                label: "Kota", 
                name: "kota",
                type: "select", 
                style: {},
                validate: true, 
                options: ['Surabaya', 'Sidoarjo']
            },
        ],
        {label: "Alamat", name: "alamat", type: "textarea", validate: true},
    ]

    const [validated, setValidated] = useState(false);
    
    const getDefaultValue = (x) => {
        return {[x.name]: (x.type === 'input') ? '' :
            (x.type === 'select') ? x.options[0] : undefined
        }
    }

    const convertToObject = x => {
        return x.reduce((p, c) => { return {...c, ...p}});
    }

    const formControl = profileQuestion.map(x => {        
            return x.length > 0 ? x.map(x2 => getDefaultValue(x2)) : getDefaultValue(x);
        })
        .reduce((p, c) => { return {...c.length ? convertToObject(c) : c, ...p}});
    const [formValue, setValue] = useState(formControl),
            onInput = ({target: {value, name}}) => {
                console.log(formValue);
                formValue[name] = value;
                setValue(formValue);
            },
            onFomSubmit = e => {
                e.preventDefault();
                e.stopPropagation();

                const form = e.currentTarget;
                console.log(formValue)
                if (form.checkValidity()) {
                    setValue(formControl);
                    setValidated(false);

                    //close modal
                    props.onHide(true);
                } else {
                    setValidated(true);
                }
            }

    const getElement = (x, i) => {
        return (
            <Form.Group style={x.style || {}}className="mb-2" key={i} controlId={x.label}>
                <Form.Label style={{fontSize: `12px`}}>{x.label}</Form.Label>
                {
                    x.type === 'select' ? 
                    <Form.Control name={x.name} value={x.options[0]} size="sm" as={x.type} onChange={onInput}>
                        {x.options.map((o, j) => <option key={j} value={o}>{o}</option>)}
                    </Form.Control> : 
                    <Form.Control required name={x.name} size="sm" as={x.type} onChange={onInput}/>
                }
                <Form.Text style={{fontSize: `10px`}} value={formValue[x.name]} className="text-muted">{x.text || ""}</Form.Text>
            </Form.Group>
        )
    }

    return (
        <>
        <Modal {...props} centered size="lg">
            <Modal.Header closeButton>
                <Modal.Title style={{fontSize: `23px`}}>ATUR JANJI {(service && service.name) || 'UNKNOWN'}</Modal.Title>
            </Modal.Header>
            <Form noValidate validated={validated} onSubmit={onFomSubmit}>
            <Modal.Body>
                <Row>
                    <Col sm={12} md={6}>
                        <Image src="repairing.png" />
                    </Col>
                    <Col sm={12} md={6}>
                        <span style={{fontSize: `15px`}} className="lead">Data Pribadi</span>
                        {
                            profileQuestion.map((x, i) => x.length ? 
                                    <Form.Row style={{margin: `0`, justifyContent: `space-between`}} key={i}>{x.map((e, j) => getElement(e, j))}</Form.Row>
                                    : getElement(x, i))
                        }
                        <span style={{fontSize: `15px`}} className="lead">Atur Waktu Kunjungan</span>
                        <Form.Row style={{margin: `0`, justifyContent: `space-between`}}>
                            <Form.Group style={{flex: `.9`}} controlId="date">
                                <Form.Label style={{fontSize: `12px`}}>Tanggal</Form.Label>
                                <Form.Control required name="tanggal" size="sm" type="date" onChange={onInput}/>
                            </Form.Group>
                            <Form.Group style={{}} controlId="time">
                                <Form.Label style={{fontSize: `12px`}}>Jam</Form.Label>
                                <Form.Control required name="jam" size="sm" type="time" onChange={onInput}/>
                            </Form.Group>
                        </Form.Row>
                        <Button type="submit" style={{fontSize: `14px`, fontWeight: `bold`, width: `100%`}} variant="danger">
                            BUAT JANJI
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>
                    BATAL
                </Button>
            </Modal.Footer> */}
            </Form>
        </Modal>
        </>
    );
}

export default AppointmentForm;