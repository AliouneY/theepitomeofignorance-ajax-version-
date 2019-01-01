<?php
	
	$conn = mysqli_connect("localhost", "root", "", "hackathon2018");
	
	$questionArray = array(); //array of questions
	$rootQuery = "SELECT * FROM questions WHERE question != \" \"";
	$outcome = mysqli_query($conn, $rootQuery);
	
	while($questionsEntered = mysqli_fetch_assoc($outcome))
	{
		$questionArray[] = $questionsEntered;
	}
	
	echo json_encode($questionArray);