export const getCartApiDetails = (state = [], action) => {
    switch (action.type) {
      case 'GET_BATCH_DETAILS':
        console.log(action.payload);
        return {
          ...state,batchDetails: action.payload
        };
      default:
        return state;
    }
    
  }