import React from 'react';
import './App.css';

import GitHubCard from './components/GitHubCard';
import FollowersList from './components/FollowersList';
import { Card, Header, Grid } from 'semantic-ui-react';

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
        <Header as="h2">{this.state.githubUserData.name} {`&`} Followers</Header>
        <Grid centered>
          <GitHubCard githubUserData={this.state.githubUserData} />

          <Card.Group centered>
            <FollowersList followers={this.state.followers} />
          </Card.Group>
        </Grid>
      </div>
    );
  }
}

export default App;
