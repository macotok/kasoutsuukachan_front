export default function postReducer(state = '', action) {
  switch (action.type) {
    case 'updatePost':
      return action.payload;
  }
  return state;
}
