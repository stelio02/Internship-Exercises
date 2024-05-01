/*
function putWater(callback){
    console.log("Vura ujin");
    setTimeout(()=> {
console.log("U zie uji")
callback()
    },2000)
}

function watchTV(){
    console.log("Pash TV");
}

function boilPasta(){
    console.log("Vura makaronat");
}

function eatPasta(){
    console.log("Hengra");
}



putWater(()=>{
    watchTV();
    boilPasta();
eatPasta();
});
*/

// Simulated asynchronous functions to simulate boiling water, cooking pasta, making sauce, and eating
function boilWater(callback) {
    console.log("Putting water to boil for pasta...");
    console.log("Watching TV while waiting for water to boil...");
    setTimeout(() => {
        console.log("Water is boiling!");
        callback();
    }, 3000); // Simulating boiling water for 3 seconds
}

function cookPasta(callback) {
    console.log("Pouring pasta into boiling water...");
    console.log("Making sauce...");
    setTimeout(() => {
        console.log("Sauce is ready!");
    }, 4000);
    setTimeout(() => {
        console.log("Pasta is ready!");
        callback();
    }, 4000); // Simulating cooking pasta for 5 seconds
}

function eat() {
    console.log("Eating delicious pasta with sauce while watching TV.");
}


// Starting the process
boilWater(() => {
        cookPasta(() => {
                eat();
            });
        });
    






