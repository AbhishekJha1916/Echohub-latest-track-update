import React from 'react';
import ReactDOM from 'react-dom';
// import Home from './pages/home';
// import Home from './pages/home';
import Login from './pages/authentication/login';
// import Signup from './pages/authentication/signup';
import './style.css';

const App: React.FC = () => {
  return (
    <div>
      {/* <Home/> */}
      <Login />
      {/* <Signup /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector<HTMLDivElement>('#app'));
