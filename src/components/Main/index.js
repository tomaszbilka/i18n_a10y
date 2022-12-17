import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import classes from './Main.module.css';

const Main = () => {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);

  const addItemHandler = () => setCount((prev) => (prev += 1));

  const removeItemHandler = () => setCount((prev) => (prev -= 1));

  const now = new Date();

  const formattedDate = Intl.DateTimeFormat(i18n.resolvedLanguage).format(now);

  return (
    <>
      <h1 className={classes.title}>{t('title', { ns: 'main' })}</h1>
      <section>
        <h2>{t('subtitle', { ns: 'main' })}</h2>
        <button onClick={addItemHandler}>+</button>
        <button onClick={removeItemHandler} disabled={count === 0}>
          -
        </button>
        <div>
          {t('score', { ns: 'main' })}:
          {t('opinion', { ns: 'main', count: count })}
        </div>
      </section>
      <section>
        <h2>{t('secondTitle', { ns: 'main' })}</h2>
        <p>
          {t('noTranslationText', { ns: 'main' })}:
          <span>
            {t('word', { ns: 'main', defaultValue: 'default value' })}
          </span>
        </p>
        <p>
          {t('fallback', { ns: 'main' })}:
          <span>{t('fallbackWord', { ns: 'main' })}</span>
        </p>
      </section>
      <section>
        <h2>{t('thirdTitle', { ns: 'main' })}</h2>
        <p>{formattedDate}</p>
      </section>
      <section>
        <h2>{t('fourthTitle', { ns: 'main' })}</h2>
        <Trans t={t} i18nKey="main:invokeHTML">
          <p>
            <b>Click</b> to go to my <a href="https://bbdev.pl/">portfolio</a>
          </p>
        </Trans>
      </section>
    </>
  );
};

export default Main;
