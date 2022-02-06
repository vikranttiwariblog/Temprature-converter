let cel = document.getElementById("cel");
let feh = document.getElementById("feh");

cel.addEventListener("input",function(){
    let c = this.value;
    let f = (c * 9/5) + 32;

    if(!Number.isInteger(f)){
        f = f.toFixed(3);
    }
    feh.value = f;
});

feh.addEventListener("input",function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    
    if(!Number.isInteger(c)){
        c = c.toFixed(3);
    }
    cel.value = c;
});

let div = 3/7;
console.log(div.toFixed(4));