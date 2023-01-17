const buttonCalled = this.document.getElementById("b1");
buttonCalled.addEventListener('click', change);
console.log(buttonCalled);



function change(){
    let r = random(255);
    let g = random(255);
    let b = random(255);

    let color1 = `rgb( ${r}, ${g}, ${b}) `
    console.log(color1);
    document.body.style.background = color1;
}



function random(number){
    return   Math.floor(Math.random()*(number+1));
}

//div color change

const divi= this.document.querySelector("#b2");
// const button= this.document.getElementById("g1");
console.log(divi);
divi.addEventListener("mouseover", moodswing);

function moodswing()
{
    let r = random1(255);
    let g = random1(255);
    let b = random1(255);
    let color1 = `rgb(${r},${g},${b})`;
    document.body.style.color= color1;

};

function random1 (num)
{
    return Math.floor(Math.random()*num+1);
};