function putWater(callback){
    console.log("Putting water to boil for pasta...");
    setTimeout(()=> {
        console.log("Water is boiling!");
        callback();
    }, 2000);
};

function watchTV(){
        console.log("Watching TV while waiting for water to boil...");
};

function cookPasta(callback){
    console.log("Pouring pasta into boiling water...");
    makeSauce();
    setTimeout(() => {
        console.log("Pasta is ready!")
        callback();
    },4000);

};

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

function main(){
    putWater(()=>{
        
        cookPasta(() =>{
            eatPasta();
        });
    });
    watchTV();
}

main();

/*
putWater(()=>{
    cookPasta(() =>{
        eatPasta();
    });
});
*/