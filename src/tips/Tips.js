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

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/categories/3")
      .then(response => {
        console.log(response);
        this.setState({ tips: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <h2>This is Tips</h2>
          {this.state.tips.map((tip, index) => {
            return (
              <div key={index}>
                <Link exact to={`/article/${tip.id}`}>
                  <h3>{tip.title}</h3>
                </Link>

                <p>
                  <i>Source: {tip.source}</i>
                  <i>, </i>
                  <i>
                    {new Date(tip.created_at).toLocaleDateString(
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

export default Tips;
