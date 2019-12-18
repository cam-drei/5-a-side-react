import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/articles/articles")
      .then(response => {
        console.log(response);
        this.setState({ articles: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <h2>This is Home</h2>
          {this.state.articles.map(article => {
            return (
              <div>
                <h3>{article.title}</h3>
                <p>{article.content}</p>
                <Divider />
              </div>
            );
          })}
        </Container>
      </Fragment>
    );
  }
}

export default Home;
