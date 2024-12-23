import React, { useState, useEffect } from 'react';

function App() {
  const [tweets, setTweets] = useState([]);

  // Fetch tweets from backend
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((error) => console.error('Error fetching tweets:', error));
  }, []);

  return (
    <div className="App">
      <h1>AI Generated Tweets</h1>
      <ul>
        {tweets.map((tweet, index) => (
          <li key={index}>{tweet.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
