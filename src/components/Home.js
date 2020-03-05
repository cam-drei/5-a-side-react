import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { DateOption } from "./Constants.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3001/categories`)
      .then(response => {
        console.log(response);
        this.setState({ articles: response.data });
      })
      .catch(error => console.log(error));
    // console.log(new Date("2019-12-19T09:53:58.678Z"));
  }

  render() {
    return (
      <Fragment>
        {/* <div className="main-background">
          <Image src="/images/black_background.jpg" />
          <div className="background-text-block">
            <h1>This is my blog</h1>
            <h3>Welcome</h3>
          </div>
        </div> */}
        <Container className="container text-inside">
          <p>Today is: {new Date().toLocaleDateString("en-US", DateOption)}</p>
          <Divider />

          {this.state.articles.map((article, index) => {
            return (
              <div key={index}>
                <Link exact to={`/article/${article.slug}`}>
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

export default Home;
