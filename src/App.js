import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';


const store = ConfigureStore();
class App extends Component {

  /**Need to surround React application with <Provider /> */
  render() {
    return (
      <Provider store={store}> 
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
