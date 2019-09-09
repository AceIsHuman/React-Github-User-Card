import React from 'react';
import GitHubCard from './GitHubCard';

class FollowersList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.followers.map(follower => {
          return <GitHubCard githubUserData={follower} />
        })}
      </div>
    )
  }
}

export default FollowersList;