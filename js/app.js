var hour = new Date().getHours();
console.log(hour);
if(hour>0&&hour<=4){
document.body.style.backgroundColor='red';
    alert("geceniz xeyre");
}

else if(hour>4&&hour<=10){
    document.body.style.backgroundColor='#ffffff';
        alert("sabahin xeyir olsun");
    }
 else   if(hour>10&&hour<=16){
    document.body.style.backgroundColor='blue';
        alert("gunortan xeyir");
    }
 else   if(hour>16&&hour<=0){
    document.body.style.backgroundColor='orange';
        alert("axsamin xeyir");
    }
    var k = 5;
    var result=(Math.pow(k,2));
    console.log(result);
    var c = 3;
    var result1=(Math.pow(c,2))*Math.PI;
    console.log(result1);
    // taskend