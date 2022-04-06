import React, { Fragment } from 'react';

/* Component imports */
import Header from '../features/header/Header';
import Footer from '../features/footer/Footer';
import Main from './components/Main';

function App() {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
