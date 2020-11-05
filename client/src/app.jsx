import React from 'react';
import axios from 'axios'
import List from './list.jsx';
import Form from './form.jsx';
import Api from './api.js';
import DropDown from './dropDown.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filtered: [],
      api: [],
      trigger: 0
    }

    this.searchFilter = this.searchFilter.bind(this);
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.switchWatch = this.switchWatch.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetch = this.fetch.bind(this);
    this.handleMovieClick = this.handleMovieClick.bind(this);
    this.retrieveTrigger = this.retrieveTrigger.bind(this)

  }
  componentDidMount() {
    this.get()
  }

  fetch(value) {
    Api.get(value)
    .then((response)=> {

      this.setState({
        api: response.data
      })
    })
    .then(()=>{console.log(this.state.api.results)})
  }
  retrieveTrigger(onOrOff) {
    console.log('state', this.state.trigger, 'on/off', onOrOff)
  }

  post(value) {
    if (value.title) {
      axios.post('/movies', value)
        .then((response) => {
          this.get()
        })
    }
  }
  get() {
    axios.get('/movies')
    .then((response)=>{
      this.setState({
        movies: response.data,
        filtered: response.data
      })
    })
  }
  patch(id) {
    axios.patch('/movies', id)
    .then((response)=>{this.get()})
  }
  searchFilter(value) {
    var newList = this.state.movies.filter(movie => {
      movie = movie.title.toLowerCase()
      return movie.includes(value)
    })
    if (newList.length < 1) {
      this.setState({
        filtered: [{id:-1, title: 'Sorry no results found' }]
      })
    } else {
      this.setState({
        filtered: newList
      })
    }
  }

  handleMovieClick(index) {
    var movie = this.state.api.results[index];
    this.post(movie)
    var newList = this.state.movies.push(movie)
    this.setState({
      movies: newList,
      trigger: !this.state.trigger
    })
  }

  handleClick(e) {
    if (e.target.innerText === 'Watched') {
      var newList = this.state.movies.filter(movie => {
        return movie.watched
      })
    } else {
      var newList = this.state.movies.filter(movie => {
        return !movie.watched
      })
    }
    this.setState({
      filtered: newList
    })
  }

  switchWatch(index, id, array){
    array[index].watched = !array[index].watched
    this.patch(array[index])
  }

  render() {
    return (
      <div id="content">
        <Form filter={this.searchFilter} get={this.get} post={this.post} fetch={this.fetch} trigger={this.retrieveTrigger}/>
        {(this.state.api.results) && (!this.state.trigger) ? <DropDown data={this.state.api.results} click={this.handleMovieClick}/> : <div></div>}
        <button id="watched" onClick={this.handleClick} >Watched</button>
        <button id="toWatched" onClick={this.handleClick} >To Watch</button>
        <List data={this.state.filtered} click={this.switchWatch}/>
      </div>
    )
  }
}

export default App;