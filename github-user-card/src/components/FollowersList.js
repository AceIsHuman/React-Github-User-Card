import React from 'react';
import GitHubCard from './GitHubCard';

class FollowersList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {this.props.followers.map(follower => {
          return <GitHubCard githubUserData={follower} />
        })}
      </>
    )
  }
}

export default FollowersList;