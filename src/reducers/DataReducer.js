const initialData={
    list:[]
}
const DataReducer = (state=initialData,action) => {
    switch(action.type){
        case "ADD_TODO":
            const { id , data } = action.payload;
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }
                ]
            }
        case "DELETE_TODO":
            const newList=state.list.filter((e)=> e.id !== action.id)
            return {
                    ...state,
                    list:newList
                }
        default: return state;           
    }
}
export default DataReducer;