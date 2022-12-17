/** @jsxImportSource theme-ui */
import React from 'react';
import ChangeLng from '../ChangeLng';
import { useTranslation } from 'react-i18next';
import { useColorMode } from 'theme-ui';

import classes from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();
  const [colorMode, setColorMode] = useColorMode();

  const changeThemeHandler = () => {
    setColorMode(colorMode === 'normal' ? 'highContrast' : 'normal');
  };

  return (
    <header className={classes.header} sx={{ bg: 'primary' }}>
      <div className={classes.title}>{t('title', { ns: 'header' })}</div>
      <div className={classes.lng}>
        <ChangeLng />
      </div>
      <div className={classes.contrastBtn}>
        <button
          sx={{ color: 'accent' }}
          className={classes.button}
          onClick={changeThemeHandler}
        >
          Hight Contrast: {colorMode === 'normal' ? 'OFF' : 'ON'}
        </button>
      </div>
    </header>
  );
};

export default Header;
