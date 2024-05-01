
function putWater(callback){
    console.log("Vura ujin");
    setTimeout(()=>
console.log("U zie uji"),
2000)
callback();
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

function main (){

putWater();
watchTV();
boilPasta();
eatPasta();

}

main();
