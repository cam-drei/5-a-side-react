import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DateOption } from "../components/Constants.js";

class Tactics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tactics: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/categories/1`)
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
          <Divider />

          {this.state.tactics.map((tactic, index) => {
            return (
              <div key={index}>
                <Link exact to={`/article/${tactic.id}`}>
                  <h3>{tactic.title}</h3>
                </Link>
                <p>
                  <i>Source: {tactic.source}</i>
                  <i>, </i>
                  <i>
                    {new Date(tactic.created_at).toLocaleDateString(
                      "en-US",
                      DateOption
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

export default Tactics;
