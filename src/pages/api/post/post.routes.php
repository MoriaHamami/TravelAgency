<?php
    header('Access-Control-Allow-Origin: *');   
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: *');

    include_once './post.service.php';
    include_once '../../server.php';

    $request_method = isset($_SERVER['REQUEST_METHOD'])?$_SERVER['REQUEST_METHOD']:'';

	
    if($request_method == "GET"){

		$action = $_REQUEST['action'];
        $connection = getConnection();

		switch ($action) {
		  case "query":
			$json = query($connection);
			break;
		  default:
			$json = array("success" => false, "Info" => "Request method not available!");
		}

        $connection = null;
		echo json_encode($json);
	}else{
		$json = array("success" => false, "Info" => "Request method not accepted!");
		echo json_encode($json);
	}
