<?php
include('../includes/config.php');

$query="select distinct c.carImage, c.carBrand, c.carModel, c.carPrice, c.transmission, c.bodyStyle, c.layout, c.capacity from car_list c order by c.carBrand";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}
# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response
echo $json_response;
?>
