import {FETCH_PACKAGES} from '../actions/types';

const initialState ={
    items: [],
    item: {}
};

export default function (state = initialState, action){
      switch(action.type) {
         case FETCH_PACKAGES: 
         console.warn('reducer');
            return {
             ...state,
             items: action.payload
          };

        default:
        return state; 
    }
}