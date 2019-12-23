import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitnesses: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/articles/fitness")
      .then(response => {
        console.log(response);
        this.setState({ fitnesses: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <h2>This is Fitness</h2>
          {this.state.fitnesses.map((fitness, index) => {
            return (
              <div key={index}>
                <h3>{fitness.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: fitness.content
                  }}
                />
                <Divider />
              </div>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default Fitness;
