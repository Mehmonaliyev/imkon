
function showTime(){
    var d = new Date();
    var h = d.getHours(); // 0 - 23
    var m = d.getMinutes(); // 0 - 59
    var s = d.getSeconds(); // 0 - 59
    var mon = d.getMonth();  // 0 - 11
    var fl = d.getFullYear(); // yil
    var dd = d.getDate(); //kun sana
    
    
   //  if(h == 0){
   //      h = 12;
   //  }
    
   //  if(h > 12){
   //      h = h - 12;
   //  }
 
    if (h<10) {
       h = "0" + h;
    }else{
       h=h;
    }
 
    if (m<10) {
       m = "0" + m;
    }else{
       m=m;
    }
 
    if (s<10) {
       s = "0" + s;
    }else{
       s;
    }
    
   
    var time = h + ":" + m + ":" + s + " - " + dd +" " + " Yanvar" + ", " + fl;
    document.getElementById("soat").innerHTML = time;
    
    setTimeout(showTime, 1000);
    
 }
 
 showTime();

 document.getElementById("ya").style.display="none";
 
// 
var x = document.getElementById("pwd");

function k() {
   document.getElementById("ko").style.display="none";
   document.getElementById("ya").style.display="block";
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function y() {
   document.getElementById("ko").style.display="block";
   document.getElementById("ya").style.display="none";
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

}