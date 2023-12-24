function generate() {
    var input=document.getElementById("input").value
    var number=Math.floor(Math.random() * input);
    number=number+1
    document.getElementById("div").innerHTML=number;
}