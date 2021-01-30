import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './pages/Products';

function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Products}></Route>
          </Switch>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
