export const productReducer=(state={
    mycat:"",
    filtProd:[]
},action)=>{
    switch(action.type){
        case "ADD_CART":
            return{
                ...state,
                mycat: action.payload
            }
            case "ADD_PROD":
                return{
                    ...state,
                    filtProd:[action.payload,...state.filtProd]
                }

        default:
            return state;
    }
     return state;
}