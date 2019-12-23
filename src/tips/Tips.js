import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

class Tips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/articles/tips")
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
                <h3>{tip.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: tip.content
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

export default Tips;
