import React from 'react';
import './App.css';
import Post from './Post';


function App() {
  return (
    <div className="app">

      <div class="app__header">
        <img
          className="app__headerImage"
          src="https://instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>This is app by Gavin Dang</h1>
      <Post username="Gavin" caption="Monday" imageUrl="https://picsum.photos/id/10/200/100"/>
      <Post username="Trung" caption="Tuesday" imageUrl="https://picsum.photos/id/20/200/100" />
      <Post />

    </div>
  );
}

export default App;
