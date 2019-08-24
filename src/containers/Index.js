import React, { Component } from 'react'
import { withRouter } from 'react-router';
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import Post from '../component/Post';

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }


  componentDidMount() {
    axios
      .get('https://demo2746340.mockable.io/q207924/posts')
      .then((results) => {
        console.log(results)
        this.setState({ posts: results.data })
      })
      .catch((data) =>{
        console.log(data)
      })
  }

  render(){
    return(
      <div>
        {(() => {
          if (this.state.posts != []) {
            this.state.posts.map( post => {
              return(
                <Post title={post.created_at} name='testUser' title={post.title} content={post.content} />
              )
            })
          } else {
            <Typography variant="h1" component="h2">
              まだなにも投稿されていません。
            </Typography>
          }
        })()}
      </div>
    );
  }
}

export default Index;
