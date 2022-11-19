
const CartReducer = (state,action) => {
    if(action.type === "ADD_TO_CART"){
        let {id,amount,image} = action.payload;
    }
    return state;
};

export default CartReducer;