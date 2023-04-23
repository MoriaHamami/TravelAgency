<?php

    function query($con){
        $postTable = "post";
        // Define data to get from server
        $sql = "SELECT * 
            FROM $postTable
            ORDER BY creationDate DESC";

        // Get data from server
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (!$posts) {
            return [];
        }

        return $posts;
    }

