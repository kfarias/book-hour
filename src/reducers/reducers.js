export const books = (state = [], action) => {
  switch(action.type){
    case 'ADD_BOOKS':
      return [...state, ...action.books]
    default:
      return state
  }
};
