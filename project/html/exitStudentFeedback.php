<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exit Student Feedback</title>

    <script src="/project/javascript/exitStudentFeedback.js"></script>
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

    <!-- <header class="ScriptHeader">
        <div class="rt-container">
            <div class="col-rt-12">
                <div class="rt-heading">
                    <h1>Feedback Form </h1>
                </div>
            </div>
        </div>
    </header> -->
    
    <section>
        <div class="rt-container">
              <div class="col-rt-12">
                  <div class="Scriptcontent">
                  
                    <iframe name="dummyframe" id="dummyframe" style="display: none;"></iframe>
    <div class="feedback">
      <h3>Feedback Form</h3>
    <p>Dear Alumni,<br>
    Please spare some moments to give us your valuable feedback.</p>
    
    <form id="form"  action="http://localhost:8080/saveExitStudentFeedback" onsubmit="return submitForm(true)" method="post" target="dummyframe">

    <label for="name" >Name/பெயர்</label>
    <br>
    <input type="text" name="name" id="name" class="text-input">
    <br>

    <label for="batch">Batch/வெளியேறும் வருடம்</label>
    <br>
    <input type="text" id="batch" name="batch" class="text-input">
    <br>

    <label for="studentId">Register number/பதிவு எண்</label>
    <br>
    <input type="text" id="studentId" name="studentId" class="text-input">
    <br>

    <label for="emailId">E-mail address/மின்னஞ்சல் முகவரி</label>
    <br>
    <input type="text" id="emailId" name="emailId" class="text-input">
    <br>

    <label for="currentPosition">Current position – Working/Entrepreneur/தற்போதைய நிலை - வேலை/தொழில்முனைவோர்</label>
    <br>
    <input type="text" id="currentPosition" name="currentPosition" class="text-input">
    <br>

    <label for="working">If working, Position and organisation/வேலை செய்தால், பதவி மற்றும் அமைப்பு  (If not enter '-')</label>
    <br>
    <input type="text" id="working" name="working" class="text-input">
    <br>

    <label for="entrepreneur">If Entrepreneur – Name and Nature of Business/தொழில்முனைவோர் என்றால் - வணிகத்தின் பெயர் மற்றும் தன்மை (If not enter '-')</label>
    <br>
    <input type="text" id="entrepreneur" name="entrepreneur" class="text-input">
    <br>
    <br>
    <label >Please rate each of the following items in terms how well your education at ACGCET, KARAIKUDI prepared you for them/காரைக்குடியில் உள்ள நமது கல்லூரியில் உங்கள் கல்வி எவ்வளவு சிறப்பாக உங்களைத் தயார்படுத்தியது என்பதன் அடிப்படையில் பின்வரும் கேள்விகள் ஒவ்வொன்றையும் மதிப்பிடவும்</label>
    <!-- <label>1. Question 1 (This is the demo for question 1)</label><br> -->
      
    <!-- <span class="star-rating">
      <input type="radio" name="rating1" value="1"><i></i>
      <input type="radio" name="rating1" value="2"><i></i>
      <input type="radio" name="rating1" value="3"><i></i>
      <input type="radio" name="rating1" value="4"><i></i>
      <input type="radio" name="rating1" value="5"><i></i>
    </span>
    
      <div class="clear"></div> 
      <hr class="survey-hr">
    <label>2. Question 2 (This is the demo for question 2)</label><br>
    <span class="star-rating">
      <input type="radio" name="rating2" value="1"><i></i>
      <input type="radio" name="rating2" value="2"><i></i>
      <input type="radio" name="rating2" value="3"><i></i>
      <input type="radio" name="rating2" value="4"><i></i>
      <input type="radio" name="rating2" value="5"><i></i>
    </span> -->
    
    
      <!-- <div class="clear"></div> 
      <hr class="survey-hr"> -->
    
    
    
      <div class="clear"></div> 
      <hr class="survey-hr"> 

      <div id="form-input"></div>
    <!-- <label for="m_3189847521540640526commentText">3. Any Other suggestions:</label><br/><br/>
    <textarea cols="75" name="commentText" rows="5"></textarea><br>
    <br> -->
      <div class="clear"></div> 
    <input style="background:#43a7d5;color:#fff;padding:12px;border:0" type="submit" name="submit" value="Submit your review" onclick="submitted()">&nbsp;
    </form>
                      </div>
               
                </div>
            </div>
        </div>
    </section>
    
    <script type="text/javascript">
    //I have determined the constant of some class function
    load();
    function load(){
      var li_items = document.querySelectorAll(".sidebar ul li");
    var hamburger = document.querySelector(".hamburger");
    var wrapper = document.querySelector(".wrapper");
    
    //What will change if you move the mouse over the sidebar
    
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
    }
     
    </script>

<?php
    if(isset($_POST['submit'])){
        $name = $_POST['name'];
        $batch = $_POST['batch'];
        $studentId = $_POST['studentId'];
        $emailId = $_POST['emailId'];
        $currentPosition = $_POST['currentPosition'];
        $working = $_POST['working'];
        $entrepreneur = $_POST['entrepreneur'];
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
        $q13 = $_POST['q13'];
        $q14= $_POST['q14'];
        $q15 = $_POST['q15'];
    
        
        $formInsertQuery ="insert into exitstudentfeedback(`name`,`batch`,`studentId`,`emailId`,`currentPosition`,`working`,`entrepreneur`,`q1`,`q2`,`q3`,`q4`,`q5`,`q6`,`q7`,`q8`,`q9`,`q10`,`q11`,`q12`,`q13`,`q14`,`q15`)
        values('".$name."','".$batch."','".$studentId."','".$emailId."','".$currentPosition."','".$working."','".$entrepreneur."','".$q1."','".$q2."','".$q3."','".$q4."','".$q5."','".$q6."','".$q7."','".$q8."','".$q9."','".$q10."','".$q11."','".$q12."','".$q13."','".$q14."','".$q15."')";
echo $formInsertQuery;
        $conn = new mysqli("localhost","root","root","acgcet_feedback");
       $connresult =  $conn->query($formInsertQuery);
       echo $connresult;
    }
    ?>


  </body>



</html>