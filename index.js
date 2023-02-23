const counterEl=document.querySelectorAll(".counter");

console.log(counterEl.length)
// console.log(parent[0])
// counterEl.forEach(countEl=>{
//     countEl.innerText="0";
//     console.log("nik")
//     updateCounter()
// function updateCounter(){
// let currentNum=+countEl.innerText;
// const datasel=countEl.getAttribute("data-ceil");
// const increment=datasel/15;
// currentNum= Math.ceil(currentNum + increment);

// if(currentNum<datasel){
//     countEl.innerText=currentNum;
//     setTimeout(updateCounter,5000)
// }
// else{
//     countEl.innerText=datasel;
// }
// }

// });


//Use just counerEl[index] for NodeList type not children or childNodes//
for(let i=0;i<counterEl.length;i++){
    counterEl[i].innerText="0";
     
        updateCounter()
        function updateCounter(){
            console.log( counterEl[i].innerText)
            let currentNum=+counterEl[i].innerText;
            const datasel=counterEl[i].getAttribute("data-ceil");
            const increment=datasel/15;
            currentNum= Math.ceil(currentNum + increment);
            if(currentNum<=datasel){
                counterEl[i].innerText=currentNum;
                setTimeout(updateCounter,50)
    }
    // else{
    //     counterEl[i].innerText=datasel;
    // }
    }


}
