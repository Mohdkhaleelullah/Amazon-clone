// src/reducer.js
export const initialState = {
    // Initial state values
    basket:[],
    user:null,
    address: {},
  };
export const getBasketTotal=(basket)=>basket.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return{ ...state,
          basket:[...state.basket, action.item],
        };
      case 'REMOVE_FROM_BASKET':
        const index = state.basket.findIndex(
          (basketItem)=>basketItem.id===action.id
        );
        let newBasket=[...state.basket];
        if(index>=0){
          newBasket.splice(index,1)
        }
        return{
          ...state,basket:newBasket,
        }
        case "SET_ADDRESS":
          return {
            ...state,
            address: { ...action.item },
          };
        case "EMPTY_BASKET":
          return{
            ...state,
            basket:[],
          }

      // Define cases for actions
      default:
      return state;
    }
    
  };
  
  export default reducer;
  