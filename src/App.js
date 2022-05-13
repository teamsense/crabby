import { Button, Container, Form } from "react-bootstrap";
import { useState } from "react";

import "./scss/main.scss";

import RandomizedCard from "./components/RandomizedCard";

function App() {
  const [moneyPool, setMoneyPool] = useState(1000);

  function doesWin(firstCardVal, myCardVal, secondCardVal) {
    const wins = myCardVal > firstCardVal && myCardVal < secondCardVal;
  }

  doesWin(2, 5, 7);
  doesWin(2, 8, 7);
  doesWin(2, 2, 7);

  return (
    <Container className="mt-5">
      <h1>Your Cash: ${moneyPool}</h1>

      <section>(Your Cards)</section>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Amount to Bet?</Form.Label>
        <Form.Control type="number" placeholder="Enter Amount" />
      </Form.Group>

      <RandomizedCard />

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
