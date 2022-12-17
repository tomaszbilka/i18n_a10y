import React from 'react';
import Header from '../Header';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={classes.layout}>{children}</main>
    </div>
  );
};

export default Layout;
