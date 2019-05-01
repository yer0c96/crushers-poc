import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {defaultState} from './reducer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App {...defaultState} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
