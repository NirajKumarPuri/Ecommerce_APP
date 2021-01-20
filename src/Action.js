export const GET_IMAGE_SUCCESS="GET_IMAGE_SUCCESS";
export const DELETE_ITEM="DELETE_ITEM"
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