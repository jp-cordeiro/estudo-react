import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';

import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div id="app">
      <BrowserRouter basename="/estudo-react/">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route path="/produtos/:id" component={ProductDetails}></Route>
            <Route path="/contato" component={Contact}></Route>
          </Switch>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
