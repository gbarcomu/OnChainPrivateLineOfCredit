import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { withdrawWithProof } from './ethereumConnector.js';
import { useState } from 'react';


function WithdrawProof() {

  const [proofData, setProofData] = useState();
  const [withdrawedAmount, setWithdrawedAmount] = useState();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => setShow(true);


  async function handleSubmit(event) {
    event.preventDefault();
    try {
      withdrawWithProof(proofData).then(val => {
        setWithdrawedAmount(parseInt(val.logs[0].data, 16));
        handleShow();
        console.log(val);
      })
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Proof Data</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={e => setProofData(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit">Submit</Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Withdrawed amount</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{withdrawedAmount} USDF</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export { WithdrawProof }