<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parent Feedback</title>

    <script src="/project/javascript/parentFeedback.js"></script>
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
    <link rel="stylesheet" href="/project/css/common.css">
    <link rel="stylesheet" href="/project/css/style.css">
  </head>

  <body>


    <div class="wrapper hover_collapse">
        <div class="top_navbar">
            <div class="logo">ACGCET FEEDBACK PORTAL</div>
            
            <div class="menu">
                
                <div class="hamburger">
                    
                    <i class="fas fa-bars"></i>
                </div>
    
            </div>
        </div>
    
        <div class="sidebar">
            <div class="sidebar_inner">
            <ul>
                <li>
                    <a href="/project/html/exitStudentFeedback.php">
                        <span class="icon"><i class="fa fa-comments" aria-hidden="true"></i></span>
                        <span class="text">Exit Student Survey</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/studentFeedback.php">
                        <span class="icon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                        <span class="text">Student  Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/parentFeedback.php">
                        <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
                        <span class="text">Parent Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/employerFeedback.php">
                        <span class="icon"><i class="fa fa-building"aria-hidden="true"></i></span>
                        <span class="text">Employer Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/login.html">
                        <span class="icon"><i class="fa fa-user"aria-hidden="true"></i></span>
                        <span class="text">Admin Login</span>
                    </a>
                </li>
                
                
    
            </ul>
            </div>
        </div>
    
    
    
    </div>

    <header class="ScriptHeader">
        <div class="rt-container">
            <div class="col-rt-12">
                <div class="rt-heading">
                   
                </div>
            </div>
        </div>
    </header>
    
    <section>
        <div class="rt-container">
              <div class="col-rt-12">
                  <div class="Scriptcontent">
                  
                    <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
    <div class="feedback">
    <p>Dear Parent,<br>
    Please spare some moments to give us your valuable feedback.</p>
    
    <form id="form"  action="" onsubmit="return submitForm(true)"  method="POST" target="dummyframe">

    <label for="studentName">Name of the Student/மாணவரின் பெயர்</label>
    <br>
    <input type="text" id="name" name="studentName" class="text-input">
    <br>

    <label for="studentId">Register Number of Student / மாணவரின் பதிவு எண்</label>
    <br>
    <input type="text" id="studentId" name="studentId" class="text-input">
    <br>

    <label for="branch">Branch /கிளை</label>
    <br>
    <input type="text" id="branch" name="branch" class="text-input">
    <br>

    <label for="sem">Semester/ தவணை</label>
    <br>
    <input type="text" id="sem" name="sem" class="text-input">
    <br>

    <label for="parentName">Name of the Parent/பெற்றோரின் பெயர் </label>
    <br>
    <input type="text" id="parentName" name="parentName" class="text-input">
    <br>

    <label for="qualAndOcc">Qualification and Occupation/தகுதி மற்றும் தொழில்</label>
    <br>
    <input type="text" id="qualAndOcc" name="qualAndOcc" class="text-input">
    <br>

    <label for="Address">Address/முகவரி</label>
    <br>
    <input type="text" id="Address" name="Address" class="text-input">
    <br>

    <label for="email">E mail ID /மின்னஞ்சல் முகவரி</label>
    <br>
    <input type="email" id="email" name="email" class="text-input">
    <br>

    <label for="contact">Contact number/ தொடர்பு எண்</label>
    <br>
    <input type="text" id="contact" name="contact" class="text-input">
    <br>

    
    
    
      <div class="clear"></div> 
      <hr class="survey-hr"> 

      <div id="form-input"></div>

      <div class="clear"></div> 
    <input style="background:#43a7d5;color:#fff;padding:12px;border:0" type="submit" value="Submit your review" onclick="submitted()">&nbsp;
    </form>
                      </div>
               
                </div>
            </div>
        </div>
    </section>
    
    <script type="text/javascript">

     var li_items = document.querySelectorAll(".sidebar ul li");
    var hamburger = document.querySelector(".hamburger");
    var wrapper = document.querySelector(".wrapper");
    

    
    li_items.forEach((li_item)=>{
        li_item.addEventListener("mouseenter", ()=>{
    
    
                li_item.closest(".wrapper").classList.remove("hover_collapse");
          //I have already added style information about hover_collapse
    
        })
      //In general, hover_collapse will be applied on the sidebar.
    
    //Hover_collapse will be removed from the sidebar when the mouse is moved
    })
    
    li_items.forEach((li_item)=>{
        li_item.addEventListener("mouseleave", ()=>{
    
                li_item.closest(".wrapper").classList.add("hover_collapse");
          //Hover Collapse will be applied again when the mouse is removed
    
        })
    })
    
    
    //Now I will execute the menu button
    
    //I have instructed here that hover_collapse will be applied and removed when the menu button is clicked.
    
    //This means that the first click will be applied and the second click will be removed
    hamburger.addEventListener("click", () => {
    
        hamburger.closest(".wrapper").classList.toggle("hover_collapse");
    })
    </script>


<?php
if(isset($_POST['submit'])){
    $studentName = $_POST['studentName'];
    $studentId = $_POST['studentId'];
    $branch = $_POST['branch'];
    $sem = $_POST['sem'];
    $parentName = $_POST['parentName'];
    $qualAndOcc = $_POST['qualAndOcc'];
    $Address = $_POST['Address'];
    $email = $_POST['email'];
    $contact = $_POST['contact'];
    $q1 = $_POST['q1'];
    $q2 = $_POST['q2'];
    $q3 = $_POST['q3'];
    $q4 = $_POST['q4'];
    $q5 = $_POST['q5'];
    $q6 = $_POST['q6'];
    $q7 = $_POST['q7'];
    $q8 = $_POST['q8'];
    $q9 = $_POST['q9'];
    $q10 = $_POST['q10'];
    $q11 = $_POST['q11'];
    $q12 = $_POST['q12'];


    
    $formInsertQuery ="insert into parentfeedback(`studentName`,`studentId`,`branch`,`sem`,`parentName`,`qualAndOcc`,`Address`,`email`,`contact`,`q1`,`q2`,`q3`,`q4`,`q5`,`q6`,`q7`,`q8`,`q9`,`q10`,`q11`,`q12`)
    values('".$studentName."','".$studentId."','".$branch."','".$sem."','".$parentName."','".$qualAndOcc."','".$Address."','".$email."','".$contact."','".$q1."','".$q2."','".$q3."','".$q4."','".$q5."','".$q6."','".$q7."','".$q8."','".$q9."','".$q10."','".$q11."','".$q12."')";
echo $formInsertQuery;
    $conn = new mysqli("localhost","root","root","acgcet_feedback");
   $connresult =  $conn->query($formInsertQuery);
   echo $connresult;
}
?>



  </body>



</html>