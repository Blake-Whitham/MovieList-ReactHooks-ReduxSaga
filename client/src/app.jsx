import React from 'react';
import List from './list.jsx';
import Form from './form.jsx';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      filtered: []
    }

    this.searchFilter = this.searchFilter.bind(this);
    this.post = this.post.bind(this);
    this.get = this.get.bind(this);
    this.switchWatch = this.switchWatch.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }
  componentDidMount() {
    this.get()
  }


  post(value) {
    axios.post('/movies', { title: value })
      .then((response) => {
        this.get()
      })

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

  handleClick(e) {
    console.log(e.target.innerText)
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
        <Form filter={this.searchFilter} get={this.get} post={this.post}/>
        <button id="watched" onClick={this.handleClick} >Watched</button>
        <button id="toWatched" onClick={this.handleClick} >To Watch</button>
        <List data={this.state.filtered} click={this.switchWatch}/>
      </div>
    )
  }
}

export default App;