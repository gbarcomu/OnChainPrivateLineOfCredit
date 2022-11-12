import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { getLineOfCredit } from './ethereumConnector.js';
import { useEffect, useState } from 'react';


function Contract() {

  const [userId, setUserId] = useState(0);
  const [lineOfCreditData, setLineOfCreditData] = useState(<div></div>);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      getLineOfCredit(userId).then(val => {
        setLineOfCreditData(
          <ListGroup>
          <ListGroup.Item>Maximum Allowance Hash: {val[0]}</ListGroup.Item>
          <ListGroup.Item>Disposed Amount Hash: {val[1]}</ListGroup.Item>
          <ListGroup.Item>Interest Rate Hash: {val[2]}</ListGroup.Item>
          <ListGroup.Item>Accrued Interests Hash: {val[3]}</ListGroup.Item>
        </ListGroup>);
      });
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>UserId</Form.Label>
          <Form.Control type="number" onChange={e => setUserId(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit">Get Line of Credit Data</Button>
      </Form>
      </Row>
      <Row>
        {lineOfCreditData}
      </Row>
    </div>
  );
}

export { Contract }