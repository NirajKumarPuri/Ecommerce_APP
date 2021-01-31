import { GET_IMAGE_SUCCESS, DELETE_ITEM,DATA_ITEM} from "./Action";
let initialstate={
    imgurl:[],
    Data:'',
}
const Itemreducer=(state=initialstate,action)=>{
    switch(action.type){
        case GET_IMAGE_SUCCESS:
            return{
                imgurl:state.imgurl.concat(action.url),
            }
            case DELETE_ITEM:
                let left=state.imgurl.slice(0,action.item)
                let right=state.imgurl.slice(action.item+1)
                return{
                  imgurl:left.concat(right)
                }
                case DATA_ITEM:
                    return{
                        Data:action.arr
                    }
        default: return state
    }
}
export default Itemreducer;