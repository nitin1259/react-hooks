import React, { Component, Fragment } from "react";
import constants from "../../constants/api-constant";
import "./AutoComplete-with-api.css";
import axios from "axios";

class AutoCompleteAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // The active selection's index
      activeSuggestion: 0,
      // The suggestions that match the user's input
      filteredSuggestions: [],
      // Whether or not the suggestion list is shown
      showSuggestions: false,
      // What the user has entered
      userInput: "",
    };

    this.cancel = ""; // this is for axios cancel token  more info https://github.com/axios/axios#cancellation
  }

  fetchSearchResult = (pageNo = 0, userInput) => {
    const pageNumber = pageNo ? `&page=${pageNo}` : "";
    const api = `${constants.search_api}&q=${userInput}${pageNumber}`;

    console.log(api);
    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(api, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const queryResult = res.data.hits.map(
          (ele) => ele.id + " - " + ele.user
        );
        console.log(queryResult);
        this.setState({
          activeSuggestion: 0,
          filteredSuggestions: queryResult,
          showSuggestions: true,
          userInput: userInput,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log("Error while hitting api", error);
        }
      });
  };

  // Event fired when the input value is changed
  onChange = (e) => {
    // const { suggestions } = this.props;
    const userInput = e.currentTarget.value;
    console.log(userInput);
    this.setState({ userInput }, () => this.fetchSearchResult(1, userInput));
  };

  // Event fired when the user clicks on a suggestion
  onClick = (e) => {
    // Update the user input and reset the rest of the state
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  // Event fired when the user presses a key down
  onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      });
    }
    // User pressed the up arrow, decrement the index
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
      },
    } = this;

    let suggestionsListComponent;

    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              // Flag the active suggestion with a class
              if (index === activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={suggestion} onClick={onClick}>
                  {suggestion}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions, you're on your own!</em>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    );
  }
}

export default AutoCompleteAPI;
