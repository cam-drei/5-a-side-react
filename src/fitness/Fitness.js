import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const DATE_OPTIONS = {
  year: "numeric",
  month: "short",
  day: "2-digit"
};

class Fitness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitnesses: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/categories/2")
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
          <Divider />

          {this.state.fitnesses.map((fitness, index) => {
            return (
              <div key={index}>
                <Link exact to={`/article/${fitness.id}`}>
                  <h3>{fitness.title}</h3>
                </Link>

                <p>
                  <i>Source: {fitness.source}</i>
                  <i>, </i>
                  <i>
                    {new Date(fitness.created_at).toLocaleDateString(
                      "en-US",
                      DATE_OPTIONS
                    )}
                  </i>
                </p>
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
