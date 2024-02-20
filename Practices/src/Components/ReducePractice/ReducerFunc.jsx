export const reducerFunc = (state, action)=>{
    const {type, payload} = action;
    switch (type){
        case "labib":
            return {...state, name: payload}
        case "mahmud":
            return {...state, name: payload}
        case "hamid":
            return {...state, name: payload}
        case "itisam":
            return {...state, name: payload}
        case "yousuf":
            return {...state, name: payload}
    }
}