import React from 'react';
import ChangeLng from '../ChangeLng';
import { useTranslation } from 'react-i18next';

import classes from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header className={classes.header}>
      <div className={classes.title}>{t('title', { ns: 'header' })}</div>
      <div className={classes.lng}>
        <ChangeLng />
      </div>
    </header>
  );
};

export default Header;
