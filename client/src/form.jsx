import React from 'react';
import List from './list.jsx'
import axios from 'axios'


class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      feature: ''
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    e.preventDefault()
  }

  handleAddSubmit(e) {
    e.preventDefault()
    if (this.state.feature !== '') {
      this.props.post(this.state.feature);
      this.setState({ feature: '' });
    }
  }
  handleSearchChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, this.props.filter(e.target.value))
  }
  handleAddChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  // debounce(()=>this.handleChange)
  render() {

    return (
      <div className="container">
        <form className="form" id="add" onSubmit={this.handleAddSubmit}>
          <input name="feature" onChange={this.handleAddChange} placeholder="add movie title here" value={this.state.feature} />
          <button id="addButton" >Add</button>
        </form>
        <form className="form" id="search" onSubmit={this.handleSubmit}>
          <input name="query" onChange={this.handleSearchChange} placeholder="search..." value={this.state.query} />
          <button id="searchButton" >Go!</button>
        </form>
      </div>
    )
  }
}

export default Form;