function generate() {
    var input=document.getElementById("input").value
    var number=Math.floor(Math.random() * input);
    document.getElementById("div").innerHTML=number;
}