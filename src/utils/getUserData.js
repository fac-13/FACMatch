export default url => {
  return fetch(url).then(response => {
    if (response.status !== 200) {
      throw new Error(`Error with the Request`);
    }
    return response.json();
  });
};
