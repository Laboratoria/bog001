import SignIn from './SignIn.js';
import Dashboard from './Dashboard.js';

const App = ({ firebase }) => {
  const el = document.createElement('div');
  el.className = 'App';

  firebase.auth().onAuthStateChanged((user) => {
    el.innerHTML = '';
    if (user) {
      el.appendChild(Dashboard());
    } else {
      el.appendChild(SignIn());
    }
  });

  el.textContent = 'Loading...';

  return el;
};

export default App;