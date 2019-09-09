import React from 'react';
import './App.css';

import GitHubCard from './components/GitHubCard';

class App extends React.Component {
  state = {
    githubUserData: {}
  }

  componentDidMount() {
    fetch('https://api.github.com/users/aceishuman')
      .then(res => res.json())
      .then(res => this.setState({ githubUserData: res }))
      .catch(err => console.error(err.response))
  }

  render() {
    return (
      <div className="App">
        <GitHubCard />
      </div>
    );
  }
}

export default App;
