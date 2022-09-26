export const getCartApiDetails = (batchDetails) => {
    console.log("something",batchDetails);
    return {
      type: 'GET_BATCH_DETAILS',
      payload: batchDetails
    };
  };