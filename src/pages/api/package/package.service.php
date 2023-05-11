<?php

    // function getPackages($con){
    function getPackages($con, $filterBy){
        $packageTable = "package";
        // Define data to get from server
        $packageAmount = $filterBy->amount;
        if($packageAmount){
            $sql = "SELECT *
                FROM $packageTable
                LIMIT $packageAmount";
        }else{
            $sql = "SELECT * 
                FROM $packageTable";
        }

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

