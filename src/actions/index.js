export const addData=(data)=>{
    return {
        type:"ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const DeleteData= (id) => {
    return {
        type:"DELETE_TODO",
        id,
    }
}
