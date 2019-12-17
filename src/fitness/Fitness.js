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
    this.renderFitness = this.renderFitness.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.renderFitness);
    window.addEventListener("click", this.renderFitness);
  }

  renderFitness() {
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
          {this.state.fitnesses.map(fitness => {
            return (
              <div>
                <h3>{fitness.title}</h3>
                <p>{fitness.content}</p>
                <Divider />
              </div>
            );
          })}
          ;
        </Container>
      </Fragment>
    );
  }
}

export default Fitness;
