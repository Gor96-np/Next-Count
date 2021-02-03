import * as actions from '../action/action';

const initialState = {
    counter:0,
    result:[]
};

const reducer = (state = initialState,action) => {
    switch(action.type) {
      case actions.INCREMENT:
          return {
              ...state,
              counter:state.counter + action.value
          };
      case actions.DECREMENT:
          return {
              ...state,
              counter:state.counter - action.val
          };      
      case actions.ADD:
          return {
               ...state,
               counter:state.counter + action.add
          };
      case actions.SUBTRACT:
          return {
                ...state,
                counter:state.counter - action.subt
          };
      case actions.STORE_RESULT:
          return {
              ...state,
              result:state.result.concat({id:state.result.length,value:action.stRes})
          }
      case actions.DELETE_RESULT:
          const deleteResult = state.result.filter(resEl => resEl.id !== action.elId) 
          return {
              ...state,
              result:deleteResult
          }
      default:
              return state;
    }
       
};

export default reducer;