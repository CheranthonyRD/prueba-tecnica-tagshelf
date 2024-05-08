import data from "../data/data.json" assert{type: "json"}

export function dataset({row, column}){
    const {dataset} = data;
    const rows = dataset.length - 1;
    const columns = dataset[0].length - 1;

    try{
        return dataset[row][column];
    }catch(error){
        throw Error(error).message;
    }
}





