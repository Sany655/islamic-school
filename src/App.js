import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from './components/About/About';
import MyCourses from './components/MyCourses/MyCourses';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/courses'>
          <Courses />
        </Route>
        <Route path='/my-courses'>
          <MyCourses />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <Notfound />
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
