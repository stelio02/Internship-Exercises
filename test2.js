function putWater(callback){
    console.log("Putting water to boil for pasta...");
    watchTV(); 
    setTimeout(()=> {
        console.log("Water is boiling!");
        callback();
    }, 2000);
}

function watchTV(){
    setTimeout(()=>{
        console.log("Watching TV while waiting for water to boil...");
    },1000);
    
}

function cookPasta(callback){
    console.log("Pouring pasta into boiling water...");
    makeSauce();
    setTimeout(() => {
        console.log("Pasta is ready!")
        callback();
    },4000);

}

function makeSauce(){
    setTimeout(() => {
        console.log("Making sauce...")
    },500);

    setTimeout(() => {
        console.log("Sauce is ready!")
    },4000);
    
}

function eatPasta(){
    console.log("Eating delicious pasta with sauce while watching TV.");
}

putWater(()=>{
    cookPasta(() =>{
        eatPasta();
    });
    
});





    






