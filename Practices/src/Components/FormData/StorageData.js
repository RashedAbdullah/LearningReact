export const storageData = ()=>{
    const data = JSON.parse(localStorage.getItem("PersonInfo"));
    if(data){
        return data;
    }
    return [];
}