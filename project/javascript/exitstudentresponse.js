
window.onload = function() {
    fetch("/project/json/exitStudent.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                
                display(jsondata);
                
            }
        );
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
  var q11 = 0;
  var q12 = 0;
  var q13 = 0;
  var q14 = 0;
  var q15 = 0;
  var count = 0;
  
  
  function parseData(data){
    for(let key in data){
      let value = data[key];
      
      document.getElementById(key).innerHTML = value;
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
  else if(val[0] == "q13"){
    q13 = q13 + (value * val[1]);
  }
  else if(val[0] == "q14"){
    q14 = q14 + (value * val[1]);
  }
  else if(val[0] == "q15"){
    q15 = q15 + (value * val[1]);
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
    q11 = Math.round(q11/count);
    q12 = Math.round(q12/count);
    q13 = Math.round(q13/count);
    q14 = Math.round(q14/count);
    q15 = Math.round(q15/count);

  
    // var q1_stars = document.getElementsByName("q1");
    // for(let i = 0 ; i < q1 ; i++){
    //   q1_stars[i].innerHTML = "&#9733";
    //   q1_stars[i].style.color = "green";
    // }
  
    // var q2_stars = document.getElementsByName("q2");
    // for(let i = 0 ; i < q2 ; i++){
    //   q2_stars[i].innerHTML = "&#9733";
    //   q2_stars[i].style.color = "green";
    // }
  
    // var q3_stars = document.getElementsByName("q3");
    // for(let i = 0 ; i < q3 ; i++){
    //   q3_stars[i].innerHTML = "&#9733";
    //   q3_stars[i].style.color = "green";
    // }
  
    // var q4_stars = document.getElementsByName("q4");
    // for(let i = 0 ; i < q4 ; i++){
    //   q4_stars[i].innerHTML = "&#9733";
    //   q4_stars[i].style.color = "green";
    // }
  
    // var q5_stars = document.getElementsByName("q5");
    // for(let i = 0 ; i < q5 ; i++){
    //   q5_stars[i].innerHTML = "&#9733";
    //   q5_stars[i].style.color = "green";
    // }
    // var q6_stars = document.getElementsByName("q6");
    // for(let i = 0 ; i < q6 ; i++){
    //   q6_stars[i].innerHTML = "&#9733";
    //   q6_stars[i].style.color = "green";
    // }
  
    // var q7_stars = document.getElementsByName("q7");
    // for(let i = 0 ; i < q7 ; i++){
    //   q7_stars[i].innerHTML = "&#9733";
    //   q7_stars[i].style.color = "green";
    // }
  
    // var q8_stars = document.getElementsByName("q8");
    // for(let i = 0 ; i < q8 ; i++){
    //   q8_stars[i].innerHTML = "&#9733";
    //   q8_stars[i].style.color = "green";
    // }
  
    // var q9_stars = document.getElementsByName("q9");
    // for(let i = 0 ; i < q9 ; i++){
    //   q9_stars[i].innerHTML = "&#9733";
    //   q9_stars[i].style.color = "green";
    // }
  
    // var q10_stars = document.getElementsByName("q10");
    // for(let i = 0 ; i < q10 ; i++){
    //   q10_stars[i].innerHTML = "&#9733";
    //   q10_stars[i].style.color = "green";
    // }
  
    // var q11_stars = document.getElementsByName("q11");
    // for(let i = 0 ; i < q11 ; i++){
    //   q11_stars[i].innerHTML = "&#9733";
    //   q11_stars[i].style.color = "green";
    // }
    // var q12_stars = document.getElementsByName("q12");
    // for(let i = 0 ; i < q12 ; i++){
    //   q12_stars[i].innerHTML = "&#9733";
    //   q12_stars[i].style.color = "green";
    // }
     var rating = Math.round((q1+q2+q3+q4+q5+q6+q7+q8+q9+q10+q11+q12+q13+q14+q15)/15);
     if(count == 0){
        rating = 0;
      }    // console.log("---------------");
    // if(rating == 1){
    //   document.getElementById("total5").style.color = "green";
    //   document.getElementById("total4").style.color = "red";
    //   document.getElementById("total3").style.color = "red";
    //   document.getElementById("total2").style.color = "red";
    //   document.getElementById("total1").style.color = "red";
    // }
    // if(rating == 2){
    //   document.getElementById("total5").style.color = "green";
    //   document.getElementById("total4").style.color = "green";
    //   document.getElementById("total3").style.color = "red";
    //   document.getElementById("total2").style.color = "red";
    //   document.getElementById("total1").style.color = "red";
    // }
    // if(rating == 3){
    //   document.getElementById("total5").style.color = "green";
    //   document.getElementById("total4").style.color = "green";
    //   document.getElementById("total3").style.color = "green";
    //   document.getElementById("total2").style.color = "red";
    //   document.getElementById("total1").style.color = "red";
    // }
    // if(rating == 4){
    //   document.getElementById("total5").style.color = "green";
    //   document.getElementById("total4").style.color = "green";
    //   document.getElementById("total3").style.color = "green";
    //   document.getElementById("total2").style.color = "green";
    //   document.getElementById("total1").style.color = "red";
    // }
    // if(rating == 5){
    //   document.getElementById("total5").style.color = "green";
    //   document.getElementById("total4").style.color = "green";
    //   document.getElementById("total3").style.color = "green";
    //   document.getElementById("total2").style.color = "green";
    //   document.getElementById("total1").style.color = "green";
  
    // }
    document.getElementById("noOfResponses").innerHTML = count;
    document.getElementById("overallRating").innerHTML = rating;
  
  
  
  
//    document.getElementById("generatePDF").addEventListener("click",  function(event) {  
//     const elementToPrint = document.getElementById('feedback');
 
//     const opt = {
//        margin:       0,
//        filename:     'ExitStudentResponse.pdf',
//        image:        { type: 'png' },
//        html2canvas:  { scale: 2, logging: true, dpi: 192, letterRendering: true },
//        jsPDF:        { unit: 'in', format: [32,10], orientation: 'p' }
//     };
  
  
//     html2pdf(elementToPrint, opt);
//   });
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
  
  
  fetch(" http://localhost:8080/getExitStudentFeedback")
  
          .then(response => {
              
          return response.json();
          })
          .then((data) => {
            
              parseData(data);
      
            });
  }

  function parseDataforIndividualResponse(data){
    for(let key in data){
      
      let value = data[key];
      
      
      var textKeys = ["working","name","batch","studentId","currentPosition","emailId","entrepreneur"];
  
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
    var url = "http://localhost:8080/getExitStudentFeedbackbysearch?regno="+rollno+"";
  
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
        console.log(data);
        document.getElementById("search").style.display = "none";
        document.getElementById("searchButton").style.display = "none";
        parseDataforIndividualResponse(data);
        }else{
          alert("Enter Proper Register Number to search...")
        }
        
  
  
      });
  }