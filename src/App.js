import React, {useState} from 'react';
import './App.css';

function App() {

  let posts = '청주 고기 맛집';
  let [title, update] = useState(['남자 코트 추천','청주 맛집 추천','리액트 강의 추천']);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> { title[0] } </h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>2월 19일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
