import React, { Component } from 'react';

class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  componentDidMount() {
    const { posts, loading } = this.props;
    console.log('component did mount', posts);
    console.log('component did mount: loading', loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;

    if(this.props.loading !== prevProps.loading){
      console.log('compenent did update: loading', loading);
    }
  }

  componentWillUnmount() {
    console.log('component Will Unmount: fui removido');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet;
  }

  tweet = () => {
    this.setState({
      tweet: true
    });
  }

  render() {
    const { posts } = this.props;
    console.log('render', posts);

    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter;