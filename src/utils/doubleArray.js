export default arr =>
  arr.reduce(
    (res, current) => res.concat([current, current]),
    []
  );
