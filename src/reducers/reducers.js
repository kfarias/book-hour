export const books = (state = [], action) => {
  switch(action.type){
    case 'ADD_BOOKS':
      return [...action.book]
    default:
      return state
  };
};
