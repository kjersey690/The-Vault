'use strict';
function vaultGenerator(){
let store={};
  function setValue (key,value){
    store[key]=value;

console.log(store);
    return store.value;


  }



 function getValue(key){
    if(store[key]){
      return store[key];

    }else{
      return null;
    }
    //  if(key!==Object.keys(store)){
    //   console.log("keith");
    //   return null;
    // } else{
    //   console.log("johnson");
    //   return store[key];
    // }

}

  return{
      setValue:setValue,
      getValue:getValue,


    };
}
//export for mocha to test (npm test)
module.exports=vaultGenerator;
var vault=vaultGenerator();
vault.setValue("cat","meow");
vault.setValue("dog", "ruff");
console.log(vault.getValue("cat"));


let keith={name:"age"};

console.log(keith);
console.log("this one" + " " + Object.keys(keith));
