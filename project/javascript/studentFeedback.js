
var papers = {

}

var selectedPapers = {

}

var details = {

}
function ugData(detail,bool){
    var parent = document.getElementById("paper");
    Object.keys(detail).forEach(function(key) {
        
        if(key != "hasElective"){
            var value = detail[key];
            var element = document.createElement("button");
        element.innerHTML = key + " - " + value;
        element.setAttribute("value",key);
        element.setAttribute("id",key);
        element.setAttribute("class","subject");
        element.setAttribute("onclick","selected(this.value)");
        papers[key] = value;
        parent.appendChild(element);
        }
    });
    if(bool == true){
        

        var btn = document.createElement("button");
        btn.setAttribute("class","submit");
        btn.innerHTML = "Submit";
        btn.setAttribute("onclick","showSubjectFeedback()");
        parent.appendChild(btn);
    }
}

function selected(val){
        
        if(document.getElementById(val).style.color == "white"){
            document.getElementById(val).style.backgroundColor = "#EFEFEF";
            document.getElementById(val).style.color = "#0e94d4";
            delete selectedPapers[val];
        }
        else{
            document.getElementById(val).style.backgroundColor = "#0e94d4";
            document.getElementById(val).style.color = "white";
            selectedPapers[val] = papers[val];
            
        }
        
        console.log(selectedPapers);
}

function select(){
    var doc = document.getElementsByClassName("details");

    details = {
        mailId : doc[0].value,
        programme : doc[1].value,
        dept : doc[2].value,
        sem : doc[3].value,
        yos : doc[4].value,
        passoutyear : doc[5].value
    }
    console.log(details);
    document.getElementById("container").style.display = "none";
    if(details.programme == "ug"){
        fetch("/project/json/ug.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                ugData(jsondata[details.dept][details.sem],false);
                if(jsondata[details.dept][details.sem].hasElective > 0){
                    ugData(jsondata[details.dept]["Elective"],true);
                }
                else{
                    ugData({},true);
                }
               
            }
        );
    }
}

function studentFeedback(){
    
}

function submitForm(bool){
    var textInputs = document.getElementsByClassName("text-input");
    for(let i = 0 ; i < textInputs.length ; i++){
        if(textInputs[i].value == "" || textInputs[i].value == null){
            if(bool){
                alert("All fields are mandatory... Please fill all the fields");
            }
            
            return false;
        }
    }
    for(let i = 1 ; i <= qlength ; i++){
        var qid = "q"+i;
        var checkbox = document.getElementsByName(qid);
        var found = false;
        for(let i = 0 ; i < checkbox.length ; i++){
            if(checkbox[i].checked){
                found = true;
            }
        }
        if(found == false){
            if(bool){
                alert("Please give rating for all questions...");
            }
            
            return false;
        }
    }
    return true;
}

function submitted(){
    if(submitForm(false)){
        alert('Your Feedback Submitted Successfully');
    }
}

function showSubjectFeedback(){
    var ultag = document.getElementById("inner-list");
    let litag = document.getElementsByTagName("li");
    
    console.log(litag);

   while(litag.length != 0){
    ultag.removeChild(litag[0]);
   }
   for(let paper in selectedPapers){
       let atag = document.createElement("a");
       let litag = document.createElement("li");
       let span1 = document.createElement("span");
       span1.setAttribute("class","icon");
       let itag = document.createElement("i");
       itag.setAttribute("class","fas fa-book-open");
       span1.appendChild(itag);
       let span2 = document.createElement("span");
       span2.setAttribute("class","text");
       let str = "displayForm(" + paper + ")";
       litag.onclick = function() {
           displayForm(paper);
       }
       span2.innerHTML = selectedPapers[paper];
       atag.appendChild(span1);
       atag.appendChild(span2);
        litag.appendChild(atag);
       ultag.appendChild(litag);
        

   }
   load();
   document.getElementById("container").style.display = "none";
   document.getElementById("paper").style.display = "none";

}

function displayForm(subId){
    var paper = selectedPapers[subId];
    paper = paper.split(" ");
    document.getElementById("feedback").style.display = "block";
    if(subId[4] == "L"){
       
        displayPracticalForm(subId);
    }
    else if(paper[0] == "Technical" && paper[1] == "Seminar"){
        
      
        displayTechnicalSeminarForm(subId);
        }
    else{
        displayTheoryForm(subId);
    }
}
function displayTheoryForm(subId){
    fetch("/project/json/theory.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                var form = document.getElementById('form');
                form.setAttribute("action","http://localhost:8080/saveTheoryFeedback")
                display(jsondata,subId,"theory");
               
            }
        );
}

function displayPracticalForm(subId){
    fetch("/project/json/practical.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                var form = document.getElementById('form');
                form.setAttribute("action","http://localhost:8080/savePracticalFeedback")
                display(jsondata,subId,"practical");
               
            }
        );
}

function displayTechnicalSeminarForm(subId){
    fetch("/project/json/seminar.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                var form = document.getElementById('form');
                form.setAttribute("action","http://localhost:8080/saveSeminarFeedback")
                display(jsondata,subId,"technicalSeminar");
               
            }
        );
}
function displayProjectForm(subId){
    fetch("/project/json/project.json")
        .then(response => {
        return response.json();
        })
        .then(jsondata =>
            {
                var form = document.getElementById('form');
                form.setAttribute("action","http://localhost:8080/saveProjectFeedback")
                display(jsondata,subId,"technicalSeminar");
               
            }
        );
}


var qlength = 0;
function display(jsondata,subId,type){
    document.getElementById("selectedDept").value = details.dept;
    document.getElementById("selectedDept").innerHTML = details.dept;

    document.getElementById("selectedSem").value = details.sem;
    document.getElementById("selectedSem").innerHTML = details.sem;

    document.getElementById("selectedYOS").value = details.yos;
    document.getElementById("selectedYOS").innerHTML = details.yos;

    document.getElementById("selectedPOY").value = details.passoutyear;
    document.getElementById("selectedPOY").innerHTML = details.passoutyear;

    document.getElementById("selectedEmail").value = details.mailId;
    document.getElementById("selectedEmail").innerHTML = details.mailId;

    var sub = subId;
    document.getElementById("selectedsub").value = sub;
    document.getElementById("selectedsub").innerHTML = sub+"-"+selectedPapers[sub];

    document.getElementById("selectedpk").value = details.mailId + "-" + sub;

    console.log(jsondata);
        clearForm("practical");
        clearForm("technicalSeminar");
        clearForm("theory");
    var parent = document.getElementById("form-input");
    for(let key in jsondata){
        var divtag = document.createElement("div");
        divtag.setAttribute("class",type);
        var br = document.createElement("br");
            divtag.appendChild(br);
            qlength = key;
            var label = document.createElement("label");
            label.innerHTML = jsondata[key];
            console.log(jsondata[key]);
            divtag.appendChild(label);

            var br = document.createElement("br");
            divtag.appendChild(br);

            var span = document.createElement("span");
            var qid = "q"+key;
            for(let i = 1 ; i < 6 ; i++){
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type","radio");
                checkbox.setAttribute("name", qid);
                checkbox.setAttribute("value",i);
                span.appendChild(checkbox);
                var itag = document.createElement("i");
                span.appendChild(itag);
            }
            span.setAttribute("class","star-rating");
            divtag.appendChild(span);
            var br = document.createElement("br");
            divtag.appendChild(br);

            var hr = document.createElement("hr");
            hr.setAttribute("class","survey-hr");
            divtag.appendChild(hr);
            parent.appendChild(divtag);
        
    }
}

function clearForm(type){
    var className = document.getElementsByClassName(type);
    for(let i = 0 ;i < className.length ; i++){
        while (className[i].firstChild) {
            className[i].removeChild(className[i].lastChild);
          }
    }
    for(let i = 0 ; i < className.length ; i++){
        className[i].parentNode.removeChild(className[i]);
    }
}
