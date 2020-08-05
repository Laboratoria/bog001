import App from './App';

const createFirebaseMock = () => {
  const mock = {
    onAuthStateChangedCallback: null,
    auth: jest.fn().mockImplementation(() => ({
      onAuthStateChanged: (cb) => {
        mock.onAuthStateChangedCallback = cb;
      },
    })),
  };
  return mock;
};

describe.only('App', () => {
  // beforeEach(() => {
  //   global.onAuthStateChangedCallback = null;
  //   global.firebase = {
  //     auth: () => ({
  //       onAuthStateChanged: (cb) => {
  //         global.onAuthStateChangedCallback = cb;
  //       },
  //     }),
  //   };
  // });

  it.skip('should show Loading by default', () => {
    const el = App();
    expect(el.textContent).toBe('Loading...');
  });

  it('should show SignIn when auth state changes and no user', () => {
    const firebase = createFirebaseMock();
    const el = App({ firebase });
    expect(el.textContent).toBe('Loading...');

    // global.onAuthStateChangedCallback(null);
    // console.log(firebase.auth.mock.calls[0]);
    expect(firebase.auth.mock.calls.length).toBe(1);
    expect(firebase.auth.mock.calls[0].length).toBe(0);
    firebase.onAuthStateChangedCallback(null);
    expect(el.children[0].textContent).toBe('SignIn');
  });

  it('should show Dashboard when auth state changes and user', () => {
    const firebase = createFirebaseMock();
    const el = App({ firebase });
    expect(el.textContent).toBe('Loading...');

    expect(firebase.auth.mock.calls.length).toBe(1);
    expect(firebase.auth.mock.calls[0].length).toBe(0);
    firebase.onAuthStateChangedCallback({ name: 'foo' });
    expect(el.children[0].textContent).toBe('Dashboard');
  });
});