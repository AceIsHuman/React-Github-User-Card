import React from 'react';
import './App.css';

import GitHubCard from './components/GitHubCard';
import FollowersList from './components/FollowersList';

class App extends React.Component {
  state = {
    githubUserData: {},
    followers_url: '',
    followers: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users/ajb85')
      .then(res => res.json())
      .then(res => this.setState({ ...this.state, githubUserData: res, followers_url: res.followers_url}))
      .catch(err => console.error(err.response))
  }

  componentDidUpdate() {
    fetch(this.state.githubUserData.followers_url)
      .then(res => res.json())
      .then(res => this.setState({...this.state, followers: res }))
  }

  render() {
    return (
      <div className="App">
        <GitHubCard githubUserData={this.state.githubUserData} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
