import React, { Component } from 'react';
import Home from './pages/Home/home.js';
import Cart from './pages/Cart/cart.js';
import Classify from './pages/Classify/classify.js';
import Detail from './pages/Detail/detail.js';
import Goodslist from './pages/Goodslist/goodslist.js';
import Mine from './pages/Mine/mine.js';
import News from './pages/News/news.js';
import Footer from './components/Footer/footer.js';
import { Route,Switch,Redirect} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        	{/*<Redirect exact from='/' to='/home/'/>*/}
      		<Switch>
            <Route path="/home/"  component={Home} />

            <Route path="/cart/" component={Cart} />

            <Route path="/classify/" component={Classify} />
            <Route path="/news/" component={News} />
            {/* <Route path="/register/" component={Register} /> */}
            <Route path="/classify/" component={Classify} />
            <Route path="/mine/" component={Mine} />
            <Route path="/news/" component={News} />
            {/* <Route path = '/details/:id' component = {Detail} /> */}
            {/* <Route path = '/details/:index/:id' component = {Detail} /> */}
            {/* <Route path="/detailsimg/:id" component={Detailsimg} /> */}
            {/* <Route path="/evaluate/:id" component={Evaluate} /> */}

            {/* <Route path="/goodslist/:id" component={GoodsList} /> */}
            <Redirect to="/home"/>
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
