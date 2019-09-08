import React from 'react';
import './App.css';

import GitHubCard from './components/GitHubCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GitHubCard />
      </div>
    );
  }
}

export default App;
