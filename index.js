function greeting(name) {
    alert('Hello ' + name);
  }
  
  function receivesAFunction(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
  }
  
  receivesAFunction(greeting);
  
 function returnsAnAnonymousFunction(){
 
    return function () {
        console.log(`how are you`);
      };
}
function returnsANamedFunction(){
  return function a(){
      console.log("this is sobhan");
  }
}

    