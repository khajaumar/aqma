function getData(){
    if(true){
        var name="khaja";
    }
    console.log(name);
    it can be change, and call from outside and inside of scope. 
}
getData();
function getDataLet(){
    if(true){
        let name="sachin";
        console.log(name);
        it can be change , but call from within Scope. 
    }
}
getDataLet();
function getConst(){
    if(true){
        const pi=3.14;
        console.log(pi);
        it cannot Change , and call within Scope.
    }
}
getConst();