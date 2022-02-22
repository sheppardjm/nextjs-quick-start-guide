import React from 'react';
import { render } from 'react-dom';

const Cmp = ({children, ...props}) => (
  <div {...props}>{children}</div>
);

render(
  <Cmp>
    <h1>It works!</h1>
  </Cmp>,
  document.getElementById('app')
);