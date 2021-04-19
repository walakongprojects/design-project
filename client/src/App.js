/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import theme from './components/theme';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { decreaseCounter, increaseCounter } from './actions/authAction';

function App(props) {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(1);

  const { count, increaseCounter, decreaseCounter } = props;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <div>
          <div>
            Count:
            {count}
          </div>
          <button onClick={() => increaseCounter()} type="button">Increase Count</button>
          <button onClick={() => decreaseCounter()} type="button">Decrease Count</button>
        </div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Router>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  count: state.auth.count,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
