import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import NotFound from './pages/NotFound';
import Header from './components/Header';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <App /> }/>
      <Route path="/addtoken" element={ <AddToken /> } />
      <Route path="/edittoken" element={ <EditToken /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
