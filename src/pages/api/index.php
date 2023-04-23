<?php

// get the database connection
function getConnection(){
    
        $host = "localhost";
        $username = "root";
        $password = "";
        $database = "writersteam";
        try{
            $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
            return $conn;
        }catch(PDOException $exception){
            echo "Could not connect to the database $database: " . $exception->getMessage();
        }
    }
?>