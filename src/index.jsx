import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

//毎回render読んでるけど実際更新されるのは内容が変更されているDateだけ
setInterval(tick, 1000);