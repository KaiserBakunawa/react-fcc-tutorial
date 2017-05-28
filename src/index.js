import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const App = () => {
  return (
    <div>
      <h1>React Todo App</h1>
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
