function login(){
    var uname = document.getElementById("username").value;
    var pwd = document.getElementById("password").value;
   

    fetch("http://localhost:8080/login", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },

  //make sure to serialize your JSON body
  body: JSON.stringify({
    username: uname,
    password: pwd
  })
})
.then(response => {
    return response.json();
    })
    .then(jsondata =>
        {
            
            validate(jsondata);
           
        }
    );
}

function validate(data){
    console.log(data);
    if(data.isAdmin == "true"){
        setCookie("isAdmin","true",1);
        setCookie("role",data.role,1);
        if(document.getElementById('feedback-selection').value == 'parentFeedback'){
            window.location.href = "http://127.0.0.1:5500/html/parentresponse.html";
        }
        else if(document.getElementById('feedback-selection').value == 'employerFeedback'){
            window.location.href = "http://127.0.0.1:5500/html/employerresponse.html";
        }
        else if(document.getElementById('feedback-selection').value == 'exitStudentFeedback'){
          window.location.href = "http://127.0.0.1:5500/html/exitstudentresponse.html";
      }
        else if(document.getElementById('feedback-selection').value == 'studentFeedback'){
          var sub = document.getElementById('subCode').value.toUpperCase();
          var bool = validateRole(data.role,sub);
          window.location.href = "http://127.0.0.1:5500/html/studentresponse.html";
      }

    
    }
    else{
        alert("Enter proper credentials");

    }
}

function validateRole(role,subcode){
  
  var code = subcode[2]+""+subcode[3]+""+subcode[4];
  if(role == 'mech'){
    if((code[0] == 'M' && code[1] == 'E' ) || (code == 'MAB' || code == 'CHM' || code == 'CEZ')){
      // setCookie("dept","mech",1);
      // setCookie("code",subcode,1);
      localStorage.setItem("dept","mech",1);
      localStorage.setItem("code",subcode,1);
      if(code[2] == 'L'){
        //lab
        localStorage.setItem("paper","lab");
      }
      else if(code == '19MEZ61' || code == '19MEZ81'){
        //project
        localStorage.setItem("paper","project");
      }
      else{
        //theory
        localStorage.setItem("paper","theory");
      }
    }
  }
  else if(role == 'civil'){
    if((code[0] == 'C' && code[1] == 'E' ) || (code == 'MAB')){
      // setCookie("dept","civil",1);
      // setCookie("code",subcode,1);
      localStorage.setItem("dept","civil",1);
      localStorage.setItem("code",subcode,1);
      if(code[2] == 'L'){
        //lab
        localStorage.setItem("paper","lab");
      }
      else if(code == '19CEZ71' || code == '19CEZ81'){
        //project
        localStorage.setItem("paper","project");
      }
      else{
        //theory
        localStorage.setItem("paper","theory");
      }
    }
  }
  else if(role == 'ece'){
    if((code[0] == 'E' && code[1] == 'C' ) || (code == 'MAB' || code == 'CHM' || code == 'CEZ' || code == 'EEG' || code =='MEH' || code == 'CSE' || code == 'CSC')){
      // setCookie("dept","ece",1);
      // setCookie("code",subcode,1);
      localStorage.setItem("dept","ece",1);
      localStorage.setItem("code",subcode,1);
      if(code[2] == 'L'){
        //lab
        localStorage.setItem("paper","lab");
      }
      else if(code == '19ECZ51' || code == '19ECZ61'){
        //seminar
        localStorage.setItem("paper","seminar");
      }
      else if(code == '19ECZ71' || code == '19ECZ81'){
        //project
        localStorage.setItem("paper","project");
      }
      else{
        //theory
        localStorage.setItem("paper","theory");
      }
    }
  }
  else if(role == 'eee'){
    if((code[0] == 'E' && code[1] == 'E' ) || (code == 'MAB' || code == 'CHM' || code == 'CEZ' || code == 'MEE')){
      // setCookie("dept","eee",1);
      // setCookie("code",subcode,1);
      localStorage.setItem("dept","eee",1);
      localStorage.setItem("code",subcode,1);
      if(code[2] == 'L'){
        //lab
        localStorage.setItem("paper","lab");
      }
      else if(code == '19EEZ61' ){
        //seminar
        localStorage.setItem("paper","seminar");
      }
      else if(code == '19EEZ81' || code == '19EEZ51'){
        //project
        localStorage.setItem("paper","project");
      }
      else{
        //theory
        localStorage.setItem("paper","theory");
      }
    }
  }
  else if(role == 'cse'){
    if((code[0] == 'C' && code[1] == 'S' ) || (code == 'MAB' || code == 'CHM' || code == 'CEZ' || code == 'ECC' )){
      // setCookie("dept","cse",1);
      // setCookie("code",subcode,1);
      localStorage.setItem("dept","cse");
      localStorage.setItem("code",subcode);
      if(code[2] == 'L'){
        //lab
        localStorage.setItem("paper","lab");
      }
      else if(code == '19CSZ51' || code == '19CSZ61'){
        //seminar
        localStorage.setItem("paper","seminar");
      }
      else if(code == '19CSZ71' || code == '19CSZ81'){
        //project
        localStorage.setItem("paper","project");
      }
      else{
        //theory
        localStorage.setItem("paper","theory");
      }
    }
  }
}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function displaySubjectCode(){
      if(document.getElementById("feedback-selection").value == "studentFeedback"){
          document.getElementById("subCode").style.display = "block";
      } 
      else{
        document.getElementById("subCode").style.display = "none";
      }
  }