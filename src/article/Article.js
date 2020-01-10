import React, { Component, Fragment } from "react";
// import axios from "axios";
// import { Container } from "semantic-ui-react";
// import { Divider } from "semantic-ui-react";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      article: this.props.location.state
    };
  }

  render() {
    let article = this.state.article;
    return (
      <Fragment>
        <div key={article.id}>
          <div>
            <p>{article.title}</p>
            <p>{article.content}</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Article;
