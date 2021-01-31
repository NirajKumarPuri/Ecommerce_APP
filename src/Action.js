export const GET_IMAGE_SUCCESS="GET_IMAGE_SUCCESS";
export const DELETE_ITEM="DELETE_ITEM"
export const DATA_ITEM="DATA_ITEM"
export const getitem=(imgurl,tittle)=>{
    return(
        {
            type:GET_IMAGE_SUCCESS,
            url:{imgurl,tittle},

        }
    )
}
export const deleteitem=(paylod)=>{
return(
    {
        type:DELETE_ITEM,
        item:paylod,
    }
)
}
export const getdata=(data)=> async (dispatch)=>{
    let result= await fetch(`https://fakestoreapi.com/products/category/${data}`)
    let item= await result.json()
    console.log('value',item);
    dispatch({
        type: DATA_ITEM,
        arr:item
    })
}