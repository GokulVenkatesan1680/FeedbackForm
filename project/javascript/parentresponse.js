// import { jsPDF } from 'jspdf';

window.onload = function() {
  if(getCookie('isAdmin') == 'true'){
  fetch("/project/json/parent.json")
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
      
          document.body.innerHTML = "";
          window.location.href = "http://127.0.0.1:5500/html/login.html";
        }
};



function parseData(data){
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
var q11 = 0;
var q12 = 0;
var count = 0;
  for(let key in data){
    
    let value = data[key];
    
    document.getElementById(key).innerHTML = value;
    var textKeys = ["address","qualAndOcc","branch","studentId","parentName","studentName","contact","email","sem"];

    if(!(key in textKeys)){

   
   var str = key + "";
   var val = str.split("_");
   
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
else if(val[0] == "q11"){
 q11 = q11 + (value * val[1]);
}
else if(val[0] == "q12"){
 q12 = q12 + (value * val[1]);
}
   
if(val[1] == '1'){
  let e = document.getElementById(key);
  e.style.backgroundColor = "red";
  e.style.borderRadius = "50%";
  e.style.width = "20px";
  e.style.marginLeft = "20px"

}
else if(val[1] == '2'){
  let e = document.getElementById(key);
  e.style.backgroundColor = "orange";
  e.style.borderRadius = "50%";
  e.style.width = "20px";
  e.style.marginLeft = "20px"
}
else if(val[1] == '3'){
  let e = document.getElementById(key);
  e.style.backgroundColor = "yellow";
  e.style.borderRadius = "50%";
  e.style.width = "20px";
  e.style.marginLeft = "20px"
}
else if(val[1] == '4'){
  let e = document.getElementById(key);
  e.style.backgroundColor = "lightgreen";
  e.style.borderRadius = "50%";
  e.style.width = "20px";
  e.style.marginLeft = "20px"
}
else if(val[1] == '5'){
  let e = document.getElementById(key);
  e.style.backgroundColor = "green";
  e.style.borderRadius = "50%";
  e.style.width = "20px";
  e.style.marginLeft = "20px"

}
    }
  }
  
  
  q1 = q1/count;
  q2 = q2/count;
  q3 = q3/count;
  q4 = q4/count;
  q5 = q5/count;
  q6 = q6/count;
  q7 = q7/count;
  q8 = q8/count;
  q9 = q9/count;
  q10 = q10/count;
  q11 = q11/count;
  q12 = q12/count;
  



   var rating = ((q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12)/12).toPrecision(3);
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




  fetch(" http://localhost:8080/getParentFeedback")

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

function parseDataforIndividualResponse(data){
  for(let key in data){
    
    let value = data[key];
    
    
    var textKeys = ["address","qualAndOcc","branch","studentId","parentName","studentName","contact","email","sem"];

    if((textKeys.indexOf(key))== -1){
      var starss = document.getElementsByName(key);
        
      for(let i = 0 ; i < Number(data[key]) ; i++){
      starss[i].innerHTML = "&#9733";
      starss[i].style.color = "green";
      }
   
   
}
else{
  document.getElementById(key).innerHTML = value;
}
  }
}

function searchbyRollNo(){

  var rollno = document.getElementById("search").value;
  document.getElementById("textInputs").style.display = "block";
  var url = "http://localhost:8080/getParentFeedbackbysearch?regno="+rollno+"";
  console.log(url);
  fetch(url)

  .then(response => {
      
  return response.json();
  })
  .then((data) => {
      if(Object.keys(data).length != 0){
        var ptags = document.getElementsByClassName("p_tags");
      for(let e=0 ; e < ptags.length ; e++){
        ptags[e].style.display = "none";
      }
      document.getElementById("search").style.display = "none";
      document.getElementById("searchButton").style.display = "none";
      parseDataforIndividualResponse(data);
      }else{
        alert("Enter Proper Register Number to search...")
      }
      


    });
}
