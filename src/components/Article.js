import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/articles/${this.props.match.params.slug}`)

      .then(response => {
        console.log(response);
        this.setState({ article: response.data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <Container className="container text-inside">
          <div>
            <h3>{this.state.article.title}</h3>

            <div
              dangerouslySetInnerHTML={{
                __html: this.state.article.content
              }}
            />
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default Article;
