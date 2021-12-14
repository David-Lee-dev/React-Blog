import React, {useState} from 'react';
import './App.css';

function App() {

  let posts = '청주 고기 맛집';
  // 데이터 바인딩을 할 때 useState를 사용하면 모든 변수형을 다 사용가능하다
  let [title, titleUpdate] = useState(['남자 코트 추천','청주 맛집 추천','리액트 강의 추천']);
  let [like, likeUpdate] = useState(0);

  const changeTitle = (target, t) => {
    let newArray = [...title];
    newArray[target] = t;
    titleUpdate(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={() => {
        changeTitle(0, '여자 코트 추천')
      }}>버튼</button>
      <div className="list">
        <h3> { title[0] } <span onClick={() => { likeUpdate(like+1) }}>👍</span> {like} </h3>
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
