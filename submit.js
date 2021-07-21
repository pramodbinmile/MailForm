function handleSubmit1(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var insnumber = document.getElementById("insnumber").value;
    var fstatus = document.getElementById("fstatus").value;
    
    sessionStorage.setItem("FNAME", fname);
    sessionStorage.setItem("LNAME", lname);
    sessionStorage.setItem("DOB", dob);
    sessionStorage.setItem("INSNUMBER", insnumber);
    sessionStorage.setItem("FSTATUS", fstatus);
}
function handleSubmit2() {
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var country = document.getElementById("country").value;

    sessionStorage.setItem("STREET", street);
    sessionStorage.setItem("CITY", city);
    sessionStorage.setItem("PIN", pin);
    sessionStorage.setItem("COUNTRY", country);


}
function handleSubmit3() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var mobile = document.getElementById("mobile").value;
 
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("PHONE", phone);
    sessionStorage.setItem("MOBILE", mobile);

}
// function handleSubmit4() {
//     var pedate = document.getElementById("pedate").value;
//     var nop = document.getElementById("nop").value;
  
//     sessionStorage.setItem("PEDATE", pedate);
//     sessionStorage.setItem("NOP", nop);
 
// }

window.addEventListener("load", () =>{
    // console.log('---', sessionStorage.getItem('FNAME'));

    document.getElementById("result-fname").innerHTML = sessionStorage.getItem("FNAME");
    document.getElementById("result-lname").innerHTML = sessionStorage.getItem("LNAME");
    document.getElementById("result-dob").innerHTML = sessionStorage.getItem("DOB");
    document.getElementById("result-insnumber").innerHTML = sessionStorage.getItem("INSNUMBER");
    document.getElementById("result-fstatus").innerHTML = sessionStorage.getItem("FSTATUS");

    document.getElementById("result-street").innerHTML = sessionStorage.getItem("STREET");
    document.getElementById("result-city").innerHTML = sessionStorage.getItem("CITY");
    document.getElementById("result-pin").innerHTML = sessionStorage.getItem("PIN");
    document.getElementById("result-country").innerHTML = sessionStorage.getItem("COUNTRY");

    document.getElementById("result-email").innerHTML = sessionStorage.getItem("EMAIL");
    document.getElementById("result-phone").innerHTML = sessionStorage.getItem("PHONE");
    document.getElementById("result-mobile").innerHTML = sessionStorage.getItem("MOBILE");

    // document.getElementById("result-pedate").innerHTML = sessionStorage.getItem("PEDATE");
    // document.getElementById("result-nop").innerHTML = sessionStorage.getItem("NOP");


})

var all =  sessionStorage.getItem("FNAME") + sessionStorage.getItem('LNAME') +sessionStorage.getItem("DOB") + sessionStorage.getItem('INSNUMBER') +sessionStorage.getItem("FSTATUS") + sessionStorage.getItem('STREET') +sessionStorage.getItem("CITY") + sessionStorage.getItem('PIN') +sessionStorage.getItem("COUNTRY") + sessionStorage.getItem('EMAIL') +sessionStorage.getItem("PHONE") + sessionStorage.getItem('MOBILE');
console.log(all);

function sent() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "pramod@binmile.com",
      Password: "YDbMT@0807",
      To:  "pr235423@gmail.com",
      From: "pramod@binmile.com",
      Subject: "Personal Details Form",
      Body: all + document.getElementById('pedate').value + document.getElementById('nop').value,
      
     })
      .then(
          message => alert("mail sent")
      );
  }
function change(){
    var x = document.getElementById('pedate').value;
    var y = document.getElementById('nop').value;
    document.getElementById('result-pedate').innerHTML = x;
    document.getElementById('result-nop').innerHTML = y;
}