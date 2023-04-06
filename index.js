//javascript
//luas segitiga
function luastri(){
    const alas =document.getElementById("alas").value;
    const tinggi = document.getElementById("tinggi").value;
     luassegitiga = 0.5*alas*tinggi;
     const result=`${luassegitiga}`;

     const parent = document.getElementById('result');
     const child = document.createElement('p');
     child.innerHTML=result;
    parent.appendChild(child);   
}

    document.getElementById("reset").onclick = function() {
    document.getElementById("result").value = "";
};
