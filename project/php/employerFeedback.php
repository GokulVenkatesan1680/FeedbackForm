<?php
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
    echo $companyName;
    $conn = new mysqli('localhost','root','','acgcet_feedback');
    if($conn-> connect_error){
        die('Connection Failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into employerfeedback(companyName,addressOfCompany,evaluatingPersonName,employeeName,employeeId,employeeDesignation,dept,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10)
        values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?");
        $stmt->bind_param("sssssssiiiiiiiiii",$companyName,$addressOfCompany,$evaluatingPersonName,$employeeName,$employeeId,$employeeDesignation,$dept,$q1,$q2,$q3,$q4,$q5,$q6,$q7,$q8,$q9,$q10);
        $stmt->execute();
        echo "Registration Success";
        $stmt->close();
        $conn->close();
    }



?>