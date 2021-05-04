import './App.css';
import Header from './components/header/Header'
import Links from './components/links/Links'
import AddLink from './components/addLink/AddLink';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Route exact path='/' scrict
        render= {
          props => (
            <Links />
          )
        } 
      />
      <Switch>
      <Route exact path='/add-new-link' scrict
        render={
          props => (
            <AddLink />
          )}
      />
      </Switch>
    </Router>
    </>
  );
}

export default App;
