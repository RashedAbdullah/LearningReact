export const localStorageData = ()=>{
    const data =  JSON.parse(localStorage.getItem("Books"));
    if(data){
        return data;
    }
    return [];
}