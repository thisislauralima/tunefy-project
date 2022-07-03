const searchAlbumsAPI = async (artist) => {
  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artist}`;
  const APIResponse = await fetch(getAlbumsAPI);
  const { results } = await APIResponse.json();
  return results;
};

export default searchAlbumsAPI;
