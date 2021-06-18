import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import City from './components/City'

const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/city" component={City} />
        </Switch>
      </BrowserRouter>
    );
  }
  
  export default Router