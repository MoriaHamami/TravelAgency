<?php

    function getReviews($con){
        $reviewTable = "review";
        // Define data to get from server
        $sql = "SELECT * 
            FROM $reviewTable";

        // Get data from server
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (!$reviews) {
            return [];
        }

        return $reviews;
    }

    function addReview($con, $data){
    }
    function updateReview($con, $data){
    }
    function removeReview($con, $data){
    }


