export const logger = (store) => (next) => (action) => {
  console.log('dispatch', action);
  console.log('before', store.getState());

  let result = next(action);

  console.log('after', store.getState());
  return result;
};
