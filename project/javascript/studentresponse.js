// import { jsPDF } from 'jspdf';
var url;
var paper= localStorage.getItem('paper');
var controller;
var controller2;
window.onload = function() {
    if(getCookie('isAdmin') == 'true' && (getCookie('role')  == localStorage.getItem("dept"))){
       
        //alert(localStorage.getItem('paper'));
        
        if(paper == 'theory' ){
            url = "/json/theory.json";
            controller = "http://localhost:8080/getTheoryFeedback?code="+localStorage.getItem("code")+"";
            controller2 = "http://localhost:8080/getTheoryFeedbackbysearch?code="+localStorage.getItem("code")+"";
        }
        else if(paper == 'seminar'){
            url = "/json/seminar.json";
            controller = "http://localhost:8080/getSeminarFeedback?code"+localStorage.getItem("code")+"";
            controller2 = "http://localhost:8080/getSeminarFeedbackbysearch?code="+localStorage.getItem("code")+"";
        }
        else if(paper == 'project'){
            url = "/json/project.json";
            controller = "http://localhost:8080/getProjectFeedback?code"+localStorage.getItem("code")+"";
            controller2 = "http://localhost:8080/getProjectFeedbackbysearch?code="+localStorage.getItem("code")+"";
        }
        else if(paper == 'lab'){
            url = "/json/practical.json";
            controller = "http://localhost:8080/getPracticalFeedback?code"+localStorage.getItem("code")+"";
            controller2 = "http://localhost:8080/getPracticalFeedbackbysearch?code="+localStorage.getItem("code")+"";
        }
    fetch(url)
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                
                display(jsondata);
                
            }
        );
          }
          else {
            // alert(getCookie('isAdmin'))
            alert("Enter valid paper...");
            document.body.innerHTML = "";
            window.location.href = "http://127.0.0.1:5500/html/login.html";
          }
  };
  var qlength = 0;
  var sum = 0;
  var q1 = 0;
  var q2 = 0;
  var q3 = 0;
  var q4 = 0;
  var q5 = 0;
  var q6 = 0;
  var q7 = 0;
  var q8 = 0;
  var q9 = 0;
  var q10 = 0;
  if(paper == 'theory' || paper == 'practical'){
    var q11 = 0;
  }
  if(paper == 'theory'){
    var q12 = 0;
  }

  var count = 0;
  
  
  function parseData(data){
    document.getElementById("deptheader").innerHTML = localStorage.getItem("dept").toUpperCase().bold();
    document.getElementById("codeheader").innerHTML = localStorage.getItem("code").bold();
    for(let key in data){
      let value = data[key];
      
      document.getElementById(key).innerHTML = value;
     var str = key + "";
     var val = str.split("_");
     var subcount = 10;
     sum = sum + (Number(val[1])*value);
     if(val[0] == "q1"){
       count = count + value;
       q1 = q1 + (value * val[1]);
  
     }
     else if(val[0] == "q2"){
      q2 = q2 + (value * val[1]);
    }
    else if(val[0] == "q3"){
      q3 = q3 + (value * val[1]);
    }
    else if(val[0] == "q4"){
      q4 = q4 + (value * val[1]);
    }
    else if(val[0] == "q5"){
     q5 = q5 + (value * val[1]);
   }
   else if(val[0] == "q6"){
     q6 = q6 + (value * val[1]);
   }
   else if(val[0] == "q7"){
    q7 = q7 + (value * val[1]);
  }
  else if(val[0] == "q8"){
   q8 = q8 + (value * val[1]);
  }
  else if(val[0] == "q9"){
   q9 = q9 + (value * val[1]);
  }
  else if(val[0] == "q10"){
    q10 = q10 + (value * val[1]);
  }

  else if((paper == 'theory' || paper == 'practical') && val[0] == "q11"){
    q11 = q11 + (value * val[1]);
    
  }
  else if(paper == 'theory' && val[0] == "q12"){
    q12 = q12 + (value * val[1]);
    
  }

 
     
  if(val[1] == '1'){
    let e = document.getElementById(key);
    e.setAttribute("class","red");
  
  }
  else if(val[1] == '2'){
    let e = document.getElementById(key);
    e.setAttribute("class","orange");

  }
  else if(val[1] == '3'){
    let e = document.getElementById(key);
    e.setAttribute("class","yellow");
  }
  else if(val[1] == '4'){
    let e = document.getElementById(key);
    e.setAttribute("class","lightgreen");
  }
  else if(val[1] == '5'){
    let e = document.getElementById(key);
    e.setAttribute("class","green");
  
  }
    }
    
    q1 = Math.round(q1/count);
    q2 = Math.round(q2/count);
    q3 = Math.round(q3/count);
    q4 = Math.round(q4/count);
    q5 = Math.round(q5/count);
    q6 = Math.round(q6/count);
    q7 = Math.round(q7/count);
    q8 = Math.round(q8/count);
    q9 = Math.round(q9/count);
    q10 = Math.round(q10/count);
    if(paper == 'practical'){
      q11 = Math.round(q11/count);
      subcount = 11;
    }
    else if(paper == 'theory'){
      q11 = Math.round(q11/count);
      q12 = Math.round(q12/count);
      subcount = 12;
    }
    
    
  
    var total = q1+q2+q3+q4+q5+q6+q7+q8+q9+q10;
    if(paper == 'practical'){
      total = total + q11;
    }
    else if(paper == 'theory'){
      total = total + q11;
     total = total + q12;
    }
     var rating = Math.round(total/subcount);
     console.log(total);
     console.log(subcount);
   
    if(count == 0){
      rating = 0;
    }

    
    document.getElementById("noOfResponses").innerHTML = count;
    document.getElementById("overallRating").innerHTML = rating;

 
  }
  

  
  
  function display(jsondata){
  var parent = document.getElementById("form-input");
  for(let key in jsondata){
  var br = document.createElement("br");
    parent.appendChild(br);
    qlength = key;
    var label = document.createElement("label");
    label.innerHTML = jsondata[key];
    console.log(jsondata[key]);
    parent.appendChild(label);
  
    var br = document.createElement("br");
    parent.appendChild(br);
  
    var span = document.createElement("span");
    var qid = "q"+key;
    for(let i = 1 ; i < 6 ; i++){
        var star = document.createElement("p");
        star.setAttribute("class","stars")
        
        var sp = document.createElement("span");
        sp.setAttribute("name",qid);
        sp.innerHTML = "&#9734";
        star.appendChild(sp);
        var p = document.createElement("p");
      
  
        p.setAttribute("id",qid+"_"+i);
        p.setAttribute("class","p_tags");
        star.appendChild(p);
        span.appendChild(star);
  
    }
    parent.appendChild(span);

    var br = document.createElement("br");
    parent.appendChild(br);
  
    var hr = document.createElement("hr");
    hr.setAttribute("class","survey-hr");
    parent.appendChild(hr);
    
  
  
  }
  
  
    console.log(getCookie('isAdmin'));
    fetch(controller)
  
    .then(response => {
        
    return response.json();
    })
    .then((data) => {
        console.log(data);
        parseData(data);
  
      });
  
  
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

  // function parseDataforIndividualResponse(data){
  //   for(let key in data){
      
  //     let value = data[key];
      
      
  //     var textKeys = ["sub","facultyName","dept","sem","passOutYear","yearOfStudy","email"];
  
  //     if((textKeys.indexOf(key))== -1){
  //       var starss = document.getElementsByName(key);
          
  //       for(let i = 0 ; i < Number(data[key]) ; i++){
  //       starss[i].innerHTML = "&#9733";
  //       starss[i].style.color = "green";
  //       }
     
     
  // }
  // else{
  //   document.getElementById(key).innerHTML = value;
  // }
  //   }
  // }
  
  // function searchbyRollNo(){
  
  //   var rollno = document.getElementById("search").value;
  //   document.getElementById("textInputs").style.display = "block";
  //   var url = controller2 + "&faculty="+rollno+"";
  //   fetch(url)
  
  //   .then(response => {
        
  //   return response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //       if(Object.keys(data).length != 0){
  //         var red = document.getElementsByClassName("red");
  //       for(let e=0 ; e < red.length ; e++){
  //         red[e].style.display = "none";
  //       }
  //       var orange = document.getElementsByClassName("orange");
  //       for(let e=0 ; e < orange.length ; e++){
  //         orange[e].style.display = "none";
  //       }
  //       var yellow = document.getElementsByClassName("yellow");
  //       for(let e=0 ; e < yellow.length ; e++){
  //         yellow[e].style.display = "none";
  //       }
  //       var lightgreen = document.getElementsByClassName("lightgreen");
  //       for(let e=0 ; e < lightgreen.length ; e++){
  //         lightgreen[e].style.display = "none";
  //       }
  //       var green = document.getElementsByClassName("green");
  //       for(let e=0 ; e < green.length ; e++){
  //         green[e].style.display = "none";
  //       }
  //       document.getElementById("search").style.display = "none";
  //       document.getElementById("searchButton").style.display = "none";
  //       console.log(data);
  //       parseDataforIndividualResponse(data);
  //       }else{
  //         alert("Enter faculty name in lowercase letters without space to search...")
  //       }
        
  
  
  //     });
  // }