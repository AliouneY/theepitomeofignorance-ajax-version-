<?php
	
	$conn = mysqli_connect("localhost", "root", "", "hackathon2018");
	
	if(isset($_POST['question']))
	{
		if($_POST['question'] !== "")
		{
			$question = $_POST['question'];
			$query = "INSERT INTO questions (question) VALUES ('$question');";
			mysqli_query($conn, $query);
		}
	}