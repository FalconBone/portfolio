import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import classes from './App.module.css';
import Header from './components/Header/Header';
import Home from './components/Main/Home/Home';
import Projects from './components/Main/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <div>
          <Home />
          <div> 
            <NavLink to='/projects'>Проекты</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
          </div>
          <div>
          <Routes>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/contacts' element={<div>
              Контакты
            </div>}/>
          </Routes>
          </div>
          
        </div>
        <div>
          Я футер
        </div>
        <div>
          йооо
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;