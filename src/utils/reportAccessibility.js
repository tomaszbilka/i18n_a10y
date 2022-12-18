import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

export const reportAccessibility = (App) => {
  const config = {
    rules: [
      {
        id: 'color-contrast',
        enabled: true,
      },
    ],
    disableOtherRules: true,
  };
  axe(React, ReactDOM, 1000, config);
};

export default reportAccessibility;

// rules id:
// https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
