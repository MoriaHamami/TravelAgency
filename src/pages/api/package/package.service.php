<?php

    function getPackages($con, $data){
        $packageTable = "package";
        // Define data to get from server
        $sql = "SELECT * 
            FROM $packageTable";

        // Get data from server
        $stmt = $con->prepare($sql);
        $stmt->execute();
        $packages = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if (!$packages) {
            return [];
        }

        return $packages;
    }

    function addPackage($con, $data){
    }
    function updatePackage($con, $data){
    }
    function removePackage($con, $data){
    }

