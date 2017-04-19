export const addBooks = (book) => {
  return {
    type: 'ADD_BOOKS',
    book
  }
};

export const saveFavorites = (favorite) => {
  return {
    type: 'ADD_FAVORITES',
    favorite
  }
};
