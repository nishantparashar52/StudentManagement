import { manipulateData } from './../helper';
const initialState = {
  loading: true
};
const user = (prevState = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_LOAD':
      return Object.assign({}, prevState, {
        loading: true
      });
    case 'FETCH_USER_SUCCESS':
      const updatedData = manipulateData(action.data);
      return Object.assign({}, prevState, {
        loading: false,
        userData: updatedData
      });
    case 'FETCH_USER_FAIL':
      return Object.assign({}, prevState, {
        loading: false,
        userData: null
      });
    default:
      return prevState;
  }
}

export default user;