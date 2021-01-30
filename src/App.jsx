import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Products}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
