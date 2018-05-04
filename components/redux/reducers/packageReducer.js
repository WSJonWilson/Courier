import {FETCH_PACKAGES} from '../actions/types';

const initialState ={
    items: [],
    item: {}
};

export default function (state = initialState, action){
      switch(action.type) {
         case FETCH_PACKAGES: 
            return {
             ...state,
             items: action.payload
          };

            //insert another fetch action to retrieve package data.
            //attempt to call both arrays and link package data using account number. TRY.
        default:
        return state; 
    }
}