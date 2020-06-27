import React, { Component } from 'react';
import './App.css';

import {CardContainer} from './components/cardContainer/card-container.component';
import {SearchBox} from "./components/searchBox/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchString: ''
    }
  }

  searchBoxOnChangeHandler = event => {
    this.setState({ searchString: event.target.value });
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    const { monsters, searchString } = this.state;
    const filterResult = monsters.filter(monster => monster.name.toLowerCase().includes(searchString.toLowerCase()));

    return (
        <div className="App">
          <h1>monsters</h1>
          <SearchBox searchString={searchString} handler={ this.searchBoxOnChangeHandler } />
          {/*<input type='search' placeholder='search monster'*/}
          {/*       onChange={event => this.setState({searchString: event.target.value})} />*/}
          <CardContainer monsters={filterResult} />
        </div>
    );
  }
}

export default App;
