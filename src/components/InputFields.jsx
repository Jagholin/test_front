import React, { useState } from "react";
import { Form, FormGroup, FormLabel, FormControl, Button } from "react-bootstrap";

export default function InputFields() {
  const [recentQueries, setRecentQueries] = useState([
    "batman", "superman", "spiderman",
    "ironman", "hulk", "wonderwoman",
  ]);


  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Search query:</Form.Label>
        <Form.Control></Form.Control>
      </Form.Group>

      <Form.Group className="mb-3">
        {
          recentQueries.map((query, index) => {
            return (
              <Button variant="primary" key={index}>
                {query}
              </Button>
            );
          })
        }
      </Form.Group>
    </Form>
  );
}
