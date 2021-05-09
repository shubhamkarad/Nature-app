import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App/>);
  
 const div = document.createElement("div");
    ReactDOM.render(<App />, div);
});