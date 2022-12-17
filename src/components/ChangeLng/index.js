import React from 'react';
import { useTranslation } from 'react-i18next';

import classes from './ChangeLng.module.css';

const ChangeLng = () => {
  const { i18n } = useTranslation();

  const lngs = {
    en: { nativeName: 'English' },
    pl: { nativeName: 'Polish' },
  };

  return (
    <div className={classes.container}>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.resolvedLanguage === lng}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
};

export default ChangeLng;
