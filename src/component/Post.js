import React from 'react';

class Post extends React.Component {
  render() {
    const { title, name, content, createdAt } = this.props
    return (
      <div className="post">
        <ul>
          <li>タイトル:{title}</li>
          <li>投稿者:{name}</li>
          <li>本文:{content}</li>
          <li>日時:{createdAt}</li>
        </ul>
      </div>
    )
  }
}

export default Post
