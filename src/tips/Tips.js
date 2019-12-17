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
    this.renderTips = this.renderTips.bind(this);
  }

  componentDidMount() {
    window.addEventListener("load", this.renderTips);
    window.addEventListener("click", this.renderTips);
  }

  renderTips() {
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
          {this.state.tips.map(tips => {
            return (
              <div>
                <h3>{tips.title}</h3>
                <p>{tips.content}</p>
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

export default Tips;
