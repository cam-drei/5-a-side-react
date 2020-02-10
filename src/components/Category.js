import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DateOption } from "./Constants.js";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const { catId } = this.props;
    axios
      .get(`http://localhost:3001/categories/${catId}`)
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
          <p>Today is: {new Date().toLocaleDateString("en-US", DateOption)}</p>
          <Divider />

          {this.state.articles.map((article, index) => {
            return (
              <div key={index}>
                <Link exact to={`/article/${article.id}`}>
                  <h3>{article.title}</h3>
                </Link>

                <p>
                  <i>Source: {article.source}</i>
                  <i>, </i>
                  <i>
                    {new Date(article.created_at).toLocaleDateString(
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

export default Category;
