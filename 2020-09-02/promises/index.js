// document.body.addEventListener(() => {
//   // ...
// });

// => pending
// => rejected => error
// => fulfilled/resolved => result

// const fetchUsers = () => {
//   const promise = fetch('/una-url');
//   promise.then((resp) => {
//     console.log(resp);
//   });
//   return promise;
// };

// const fetchUsers = async () => {
//   const resp = await fetch('/una-url');
//   return resp.status;
// };

const fetchUsers = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      reject(new Error('Algo salió mal'));
    }
    resolve(1);
  }, 3 * 1000);
});

// const fetchUsers = () => Promise.resolve(undefined);

fetchUsers()
  .then(console.log)
  .catch(console.error);
