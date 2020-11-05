import React from 'react';
import List from './list.jsx'
import axios from 'axios'
import lodash from 'lodash'
import Api from './api.js';
import DropDown from './dropDown.jsx'



class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      feature: '',
      api: [],
      trigger: 0
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleAddChange = this.handleAddChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.callBack = this.callBack.bind(this);


  }

  fetch(value) {
    Api.get(value)
    .then((response)=> {
      this.setState({
        api: response.data
      })
    })
    // .then(()=>{console.log(this.state.api.results)})
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
  handleAddChange(event) {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    })
    if (!this.debouncedFn) {
      this.debouncedFn = _.debounce(() => {
        this.fetch(event.target.value)
      }, 300)
    }
    this.debouncedFn();
  }

  callBack() {
    this.setState({
      feature: '',
      api: []
    })

  }
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
        {(this.state.api.results) && (!this.state.trigger) ? <DropDown cb={this.callBack} data={this.state.api.results} click={this.props.movieClick}/> : <div></div>}
      </div>

    )
  }
}

export default Form;