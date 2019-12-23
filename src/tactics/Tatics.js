import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

class Tactics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tactics: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/articles/tactics")
      .then(response => {
        console.log(response);
        this.setState({ tactics: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <h2>This is Tactics</h2>
          {this.state.tactics.map((tactic, index) => {
            return (
              <div key={index}>
                <h3>{tactic.title}</h3>
                <p>{tactic.content}</p>
                <Divider />
              </div>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default Tactics;
