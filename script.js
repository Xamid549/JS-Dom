
let ism=document.getElementById("ism");
let fam=document.getElementById("fam");
let yosh=document.getElementById("yosh");

let a=prompt("Ism kiriting:");
let b=prompt("Familiya kiriting:");
let c=prompt("Yosh kiriting:");
let d=+prompt("Ismlaringiz katta harfda bo'lsinmi yoki kichik?\n1.Katta\n2.Kichik");

if(d==1){
    ism.textContent="1.Ism: "+a.toUpperCase(); 
    fam.textContent="2.Familiya: "+b.toUpperCase(); 
    yosh.textContent=`3.Yosh: `+c; 
}else{
    ism.textContent="1.Ism: "+a.toLowerCase(); 
    fam.textContent="2.Familiya: "+b.toLowerCase(); 
    yosh.textContent=`3.Yosh: `+c; 
}
