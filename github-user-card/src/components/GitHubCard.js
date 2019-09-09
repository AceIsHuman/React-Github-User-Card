import React from 'react';
import { Card, Image } from 'semantic-ui-react';

class GitHubCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.githubUserData.avatar_url} />
        <Card.Content>
          <Card.Header>{this.props.githubUserData.login}</Card.Header>
          <Card.Meta>{this.props.githubUserData.name}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div>
            <a href={this.props.githubUserData.html_url} target="_blank">View on GitHub</a>
          </div>
        </Card.Content>
      </Card>
    )
  } 
}

export default GitHubCard;