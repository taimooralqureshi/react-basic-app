import React from 'react';
import './App.css';
import Greet from './Greet';
import MediaCard from './MediaCard';
import MyButton from './MyButton';
import { useState } from 'react';


function App() {
  let body = "Lorem ipsum dolor sit amet."
  let url = ["https://images.unsplash.com/photo-1571289868918-f1deff2f7219?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    , "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    , "https://images.fineartamerica.com/images-medium-large-5/abstract-art-landscape-metallic-gold-textured-painting-eye-of-the-universe-by-madart-megan-duncanson.jpg"
  ]
  let art = ['My Art 1', 'My Art 2', 'My Art 3']
  let [idx, setIdx] = useState(0);
  let [toggle, setToggle] = useState(false)
  function setChange(action){
    if (action) 
       idx > 0 ? setIdx(--idx) : setIdx(2);
    else 
      idx < 2 ? setIdx(++idx) : setIdx(0);
        
    
  }
  return (
    <div className="App">
      <Greet name='Taimoor Qureshi' />
      {/* <MyButton toggle={isLit} text={isLit? "Day": "Night"}/> */}
      <header className="App-header">
       <div className={toggle?'':'hide'} >

          <MediaCard imageUrl={url[idx]} title={<b>{art[idx]}</b>} body={body} />

       </div>
       <div>
       {toggle && <MyButton toggle={true} setToggle={setChange} text='Back' />}
        <MyButton toggle={!toggle} setToggle={setToggle} text={toggle? "hide" : "show"} />
       {toggle && <MyButton toggle={false} setToggle={setChange} text='Next' />}

       </div>
       
      </header>
    </div>
  );
}

export default App;
