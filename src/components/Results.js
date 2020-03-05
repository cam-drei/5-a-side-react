import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { DateOption } from "./Constants.js";
import { Container } from "semantic-ui-react";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: ""
    };
  }

  render() {
    console.log("SEARCH RESULTS PROPS", this.props.location.state.results);
    console.log("SEARCH RESULTS PROPS", this.props.location.state.value);
    console.log("SEARCH RESULTS URL", window.location.href);
    return (
      <Fragment>
        <Container className="container text-inside">
          <h1>Search Results</h1>
          <h3>
            Search Value: <i>"{this.props.location.state.value}"</i>
          </h3>
          {this.props.location.state.results.length ? (
            <ul>
              <h3>List of results:</h3>
              {(this.props.location.state.results || []).map(
                (article, index) => {
                  return (
                    <li key={index}>
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
                    </li>
                  );
                }
              )}
            </ul>
          ) : (
            <h3>Sorry! We have no result</h3>
          )}
        </Container>
      </Fragment>
    );
  }
}
