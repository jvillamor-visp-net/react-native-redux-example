import { CHANGE_TAB } from '../constants/ActionTypes';

const tabs = [
   { key: 'recipeList', title: 'Recipe List' },
   { key: 'stockList', title: 'Stock List' },
   { key: 'orderList', title: 'Order List' },
]

const initialState = {
   index: 0,
   tabs
}

function tabsNav(state=initialState, action){
   if (action.index === state.index) {
      return state;
   }

   switch (action.type) {
      case CHANGE_TAB:
         return {
            ...state,
            index: action.index
         }
      default:
         return state;
   }
}

export default tabsNav
