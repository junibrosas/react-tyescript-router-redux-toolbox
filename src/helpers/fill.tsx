export default (propName: string, value: any, object: Object) => {
    for(let prop in object){
        if(prop == propName){
            object = Object.assign({}, object, {
                [prop]: value
            });
        }
    }

    return object;
}