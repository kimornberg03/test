let a = prompt ("Ena sidan");
let b = prompt ("Andra sidan");


function calcHypotenuse(a, b) 
{
    return (Math.sqrt((a * a) + (b * b)))
}

alert (calcHypotenuse(a, b));
