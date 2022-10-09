

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employer Feedback</title>

    <script src="/project/javascript/employerFeedback.js"></script>
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
                        <span class="text">Student Feedback</span>
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
                  
           
    <div class="feedback">
      <h3>Feedback Form</h3>
    <p>Dear Employer,<br>
    Please spare some moments to give us your valuable feedback.</p>
    
    <form id="form"  action="" onsubmit="return submitForm(true)"  method="POST">

    <label for="companyName" >Name of Company/Organization / நிறுவனத்தின் பெயர்</label>
    <br>
    <input type="text" name="companyName" id="companyName" class="text-input">
    <br>

    <label for="addressOfCompany">Address of Company/Organization / நிறுவனத்தின் முகவரி</label>
    <br>
    <input type="text" id="addressOfCompany" name="addressOfCompany" class="text-input">
    <br>

    <label for="evaluatingPersonName">Name of the Evaluating person with designation / மதிப்பிடும் நபரின் பெயர் பதவியுடன்</label>
    <br>
    <input type="text" id="evaluatingPersonName" name="evaluatingPersonName" class="text-input">
    <br>

    <label for="employeeName">Name of the Employee/Alumni / பணியாளர்/முன்னாள் மாணவரின் பெயர்</label>
    <br>
    <input type="text" id="employeeName" name="employeeName" class="text-input">
    <br>

    <label for="employeeId">College Id of the Employee/Alumni / பணியாளர்/முன்னாள் மாணவரின் கல்லூரி பதிவு எண்</label>
    <br>
    <input type="text" id="employeeId" name="employeeId" class="text-input">
    <br>

    <label for="employeeDesignation">Designation of Employee/Alumni / பணியாளர்/முன்னாள் மாணவரின் பதவி</label>
    <br>
    <input type="text" id="employeeDesignation" name="employeeDesignation" class="text-input">
    <br>

    <label for="dept">Department/Section/Team / துறை/பிரிவு/குழு</label>
    <br>
    <input type="text" id="dept" name="dept" class="text-input">
    <br>

    
    
      <div class="clear"></div> 
      <hr class="survey-hr"> 

      <div id="form-input"></div>
    <!-- <label for="m_3189847521540640526commentText">3. Any Other suggestions:</label><br/><br/>
    <textarea cols="75" name="commentText" rows="5"></textarea><br>
    <br> -->
      <div class="clear"></div> 

  
    <input style="background:#43a7d5;color:#fff;padding:12px;border:0" type="submit" name="submit" value="submit">&nbsp;
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
  </body>



</html>

<?php
    if(isset($_POST['submit'])){
        $companyName = $_POST['companyName'];
        $addressOfCompany = $_POST['addressOfCompany'];
        $evaluatingPersonName = $_POST['evaluatingPersonName'];
        $employeeName = $_POST['employeeName'];
        $employeeId = $_POST['employeeId'];
        $employeeDesignation = $_POST['employeeDesignation'];
        $dept = $_POST['dept'];
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
    
        
        $formInsertQuery ="insert into employerfeedback(`companyName`,`addressOfCompany`,`evaluatingPersonName`,`employeeName`,`employeeId`,`employeeDesignation`,`dept`,`q1`,`q2`,`q3`,`q4`,`q5`,`q6`,`q7`,`q8`,`q9`,`q10`)
        values('".$companyName."','".$addressOfCompany."','".$evaluatingPersonName."','".$employeeName."','".$employeeId."','".$employeeDesignation."','".$dept."','".$q1."','".$q2."','".$q3."','".$q4."','".$q5."','".$q6."','".$q7."','".$q8."','".$q9."','".$q10."')";
echo $formInsertQuery;
        $conn = new mysqli("localhost","root","root","acgcet_feedback");
       $connresult =  $conn->query($formInsertQuery);
       echo $connresult;
    }
    ?>