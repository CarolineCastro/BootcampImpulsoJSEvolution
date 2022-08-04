import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
}

function Twitter(props) {

  const { loading } = props;
  const [tweet, setTweet] = useState('title');

  //componentDidMount
  useEffect(() => {
    const { posts, loading } = props;
    console.log('component did mount', posts);

    console.log('component did mount: loading', loading);
  }, []);

  //componetDidUpdate
  useEffect(() => {
    console.log('component did update', loading)
  }, [loading]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componet will unmount: fui removido');
    }
  }, []);


  const handleTweet = () => {
    setTweet('Tweet atualizado');
  }

  
  console.log('Tweet atualizado: ', tweet);
  return (
    <div>
      {<button onClick={handleTweet}>Re-render</button>}
      tests
    </div>
  )
}

export default memo(Twitter, areEqual);