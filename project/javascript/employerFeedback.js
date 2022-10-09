window.onload = function() {
    fetch("/project/json/employer.json")
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
                var checkbox = document.createElement("input");
                checkbox.setAttribute("type","radio");
                checkbox.setAttribute("name", qid);
                checkbox.setAttribute("value",i);
                span.appendChild(checkbox);
                var itag = document.createElement("i");
                span.appendChild(itag);
            }
            span.setAttribute("class","star-rating");
            parent.appendChild(span);
            var br = document.createElement("br");
            parent.appendChild(br);

            var hr = document.createElement("hr");
            hr.setAttribute("class","survey-hr");
            parent.appendChild(hr);
        
    }
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