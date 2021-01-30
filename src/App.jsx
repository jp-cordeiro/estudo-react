import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route path="/contato" component={Contact}></Route>
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
