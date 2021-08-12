import React from 'react';

import { Header } from './components/Header/Header';
import { BlogList } from './components/Blog-list/Blog-list';

import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogList />
    </React.Fragment>
  );
}

export default App;