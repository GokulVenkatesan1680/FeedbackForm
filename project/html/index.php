<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <link rel="stylesheet" href="/project/css/common.css">
    <script src="https://kit.fontawesome.com/b99e675b6e.js"></script>
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
                    <a href="/project/html/exitStudentFeedback.html">
                        <span class="icon"><i class="fa fa-comments" aria-hidden="true"></i></span>
                        <span class="text">Exit Student Survey</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/studentFeedback.html">
                        <span class="icon"><i class="fa fa-graduation-cap" aria-hidden="true"></i></span>
                        <span class="text">Student  Feedback</span>
                    </a>
                </li>
                <li>
                    <a href="/project/html/parentFeedback.html">
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
        <img src="/project/images/acgcet.png" id="clglogo">
        <a href="/html/login.html" style="float: right; margin-top: -70px; margin-right: 20px;">Admin Login</a>
       
    <p id="hometext">
        Feedback is important for effective learning and teaching experience.
        <br><br>
        Effective feedback can aid in finer transitions that will help in attaining excellence.
        <br><br>
        So, please provide your valuable feedback!
        <br><br>
        Four types of feedback forms are available for students, parents, employees, and passed-out students.
        <br><br>
        Please fill it out and let us know.
    </p>
    <a href="/project/html/studentFeedback.html"><button class="btn" id="btn1">Student Feedback</button></a>
    <a href="/project/html/exitStudentFeedback.html"><button class="btn" >Exit Student Feedback</button></a>
    <a href="/project/html/parentFeedback.html"><button class="btn" >Parent Feedback</button></a>
    <a href="/project/html/employerFeedback.html"><button class="btn">Employer Feedback</button></a>
    
   
    
    
    </div>



    <script type="text/javascript">
      
    
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