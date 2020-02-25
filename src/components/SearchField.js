import React, { Fragment, Component } from "react";
import { Container } from "semantic-ui-react";

import { Search, Icon } from "semantic-ui-react";
import _ from "lodash";
import axios from "axios";

// const resultRenderer = ({ title }) => <h3 content={title}>{title}</h3>;

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ title: "", isLoading: true, value });
    // debugger;
    axios
      .get(`http://localhost:3001/search/word?search=${value}`)
      .then(response => {
        // debugger;
        this.setState({
          isLoading: false,
          results: response.data
        });
      })
      .catch(error => console.log(error));
  };
  // setCurrentResult = result => {
  //   // debugger;
  //   this.setState({
  //     ...result
  //   });
  // };
  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Fragment>
        <Container className="container text-inside">
          <Icon
            onClick={() => this.setState({ results: [], value: "" })}
            circular
            name="close"
          />
          <Search
            placeholder="Search..."
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            // resultRenderer={resultRenderer}
          />

          <div>
            <p>This is test result</p>
            <ul>
              {(this.state.results || []).map((item, index) => (
                <li key={index}>
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default SearchField;

// import { If, Then, ElseIf, Else } from "react-if-elseif-else-render";

/* <If condition={this.handlePressEnter && this.state.value.length > 0}>
  <Then>
    <Redirect
      to={{
        pathname: "/results",
        state: {
          results: this.state.results,
          value: this.state.value
        }
      }}
    />
  </Then>
</If>; */
