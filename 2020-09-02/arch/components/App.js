import render from '../render.js';
import About from './About.js';
import Home from './Home.js';
import Nav from './Nav.js';
import Works from './Works.js';

const routes = {
  '/': Home,
  '/about': About,
  '/works': Works,
};

const App = () => {
  const el = document.createElement('div');
  const main = document.createElement('main');
  let state = {
    route: null,
  };

  const setState = (newState) => {
    state = { ...state, ...newState };
    render(() => routes[state.route]({ setState }), main);
    window.history.pushState({}, '', state.route);
  };

  el.className = 'App';
  el.appendChild(Nav({ setState }));
  el.appendChild(main);

  setState({ route: '/' });

  window.addEventListener('popstate', () => {
    // setState({ route: window.location.pathname });
  });

  return el;
};

export default App;
