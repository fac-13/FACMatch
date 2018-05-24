export default arr =>
  arr.reduce(
    (res, current, index, array) => res.concat([current, current]),
    []
  );
