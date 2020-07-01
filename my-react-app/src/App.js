import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBox from './pages/search.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBox />
      </header>
    </div>
  );
}

export default App;
