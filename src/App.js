import { Button, Container, Form } from "react-bootstrap";

import "./scss/main.scss";

function App() {
  function doesWin(firstCardVal, myCardVal, secondCardVal) {
    const wins = myCardVal > firstCardVal && myCardVal < secondCardVal;
    console.log(wins);
  }

  doesWin(2, 5, 7);
  doesWin(2, 8, 7);
  doesWin(2, 2, 7);

  return (
    <Container className="mt-5">
      <h1>Your Cash: $100</h1>

      <section>(Your Cards)</section>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount to Bet?</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount" />
      </Form.Group>
      <Button variant="primary" size="lg">
        BET!
      </Button>

      <Button variant="danger" size="lg">
        PASS!
      </Button>
    </Container>
  );
}

export default App;
