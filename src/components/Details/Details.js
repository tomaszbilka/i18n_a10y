import React, { useState } from 'react';

import classes from './Details.module.css';

const Details = ({ title, description }) => {
  const [show, setShow] = useState(false);

  const toggleShowHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className={classes.container}>
      <div className={classes.controls}>
        <h3>{title}</h3>
        <button
          onClick={toggleShowHandler}
          className={classes.buttons}
        >{`show ${show ? 'less' : 'more'}`}</button>
      </div>
      {show && <p>{description}</p>}
    </div>
  );
};

export default Details;
