import React from 'react';
import './App.css';
import RootRoute from './routes/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RootRoute />
      </div>
    </Provider>
    
    
  );
}

export default App;
