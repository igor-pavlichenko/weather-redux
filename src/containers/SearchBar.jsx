import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../redux/actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      term: event.target.value,
    })
    console.log('input change: ', event.target.value);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    console.log('form submitted');
  }

  render() {
    return (
      <form
        className="container"
        onSubmit={this.handleFormSubmit}
      >
        <div className="form-group row mt-5 justify-content-center">
          <div className="col-10">
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Get a five-day forecast in your favourite cities"
                value={this.state.term}
                onChange={this.handleInputChange}
              />
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="submit">
                  Search
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

/**
 * Whatever is returned from this function will end up as this.props
 * inside BookList
 *
 * @param {any} state
 * @returns
 */
function mapStateToProps(state) {
  console.log('state: ', state);
  return {
    books: state.books.books,
  };
}

/**
 * Anything returned from this function will end up as props
 * on the BookList container
 *
 * @param {any} dispatch
 * @returns
 */
function mapDispatchToProps(dispatch) {
  // whenever 'selectBook' is called, the result should be passed
  // to all our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(
  // mapStateToProps,
  // mapDispatchToProps,
)(SearchBar);
