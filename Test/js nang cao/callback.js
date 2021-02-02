// var coffeeMachine = {
//     makeCoffee : function(onFinish){
//         console.log('Máy pha cà phê: ');
//         onFinish();
//     }
// }
// var beep = () =>{console.log('bíp bíp')};

// coffeeMachine.makeCoffee(function(){
//     console.log('máy bị hư rồi, haha')
// });

// coffeeMachine.makeCoffee(beep);


// function processUserInput(callback){
//     var name = "trung";
//     callback(name);
// }
// b = processUserInput(function(){
//      a = "hello";
// });

// console.log(b);




// function faireQqcALAncienne(successCallback, failureCallback){
//     console.log("C'est fait");
//     // réussir une fois sur deux
//     if (Math.random() > .5) {
//     successCallback("Réussite");
//     } else {
//     failureCallback("Échec");
//     }
//     }
    function successCallback(résultat) {
    console.log("L'opération a réussi avec le message : " +
    
    résultat);
    
    }
    function failureCallback(erreur) {
    console.log("L'opération a échoué avec le message : " +
    
    erreur);
    
    }
//     faireQqcALAncienne(successCallback, failureCallback);


function faireQqc() {
    return new Promise((resolve, reject) => {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() > .5) {
    resolve("Réussite");
    } else {
    reject("Échec");
    }
    })
    }
    const promise = faireQqc();
    promise.then(successCallback, failureCallback);