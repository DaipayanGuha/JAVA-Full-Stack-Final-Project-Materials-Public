# JAVA-Full-Stack-Final-Project-Materials-Public

Front End HTML CSS Bootstrap Links :-

	W3Schools :-

		Main Page :-
			https://www.w3schools.com/css/css_rwd_templates.asp

		Individual Sites with code :-
		
			Post Page and Profile Page :-
				Social Media Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_social&stacked=h
				Clothing Store Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_clothing_store&stacked=h

			About User Profile :-
				CV Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_cv&stacked=h

			Searching Profiles :-
				Hotel Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_hotel&stacked=h

			Album :-
				With caption
				Nature Portfolio Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_portfolio&stacked=h
				Without caption
				People Portfolio Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_portfolio2&stacked=h
				Interior Design Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_interior_design&stacked=h

			Team :-
				Marketing / Website Template
				https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_website&stacked=h














Anup's :-

<html>

<head>
	<script type="text/javascript">
	function showAlert(){
		alert("You are Successfully Registered");
		}
		</script>
	<title>CapBook Registration Form</title>
</head>
 
<body>
	<h2 align="center">CAPBOOK REGISTRATION FORM</h2> 
	<p align="center">It's Free and always will be; We don't get paid enough</p>    
	<form action="registerUser" method="post" modelAttribute="user">
		<table align="center" cellpadding = "30" border="2">
			--- First Name---
			<tr>
				<td>First Name : </td>
				<td><input type="text" name="firstName" id="firstName" maxlength="25" required/>
			</tr>
			<br>
			---Last Name---
			<tr>
				<td>Last Name : </td>
				<td><input type="text" name="lastName" id="lastName" maxlength="25" required/>
				</td>
			</tr>
			<br>
			--- Email Id---
			<tr>
				<td>Email ID : </td>
				<td><input type="text" name="email" id="email" maxlength="100" required/></td>
			</tr>
			<br>
			<form name="password_confirm">
				--- Password---
				<tr>
					<td>New Password : </td>
					<td><input type="password" name="password" placeholder="Enter Password" id="password" required></td>
				</tr>
				<br>
				--- Confirm Password---
				<tr>
					<td>Confirm New Password : </td>
					<td><input type="password" placeholder="Re-enter Password" id="confirmPassword" required></td>
				</tr>
				<br>
			</form>
			--- Gender---
			<tr>
				<td>Gender : </td>
				<td>
				Male <input type="radio" name="gender" value="Male" />
				Female <input type="radio" name="gender" value="Female" />
				</td>
			</tr>
			
			<tr></tr>
			
			
			--- Date Of Birth---
			<tr>
				<form>
				 <td>Date Of Birth :</td>
						<td><input type="text" name="dob" placeholder="DD-MM-YYYY" required
						pattern="(?:30))|(?:(?:0[13578]|1[02])-31))/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])"
						title="Enter a date in this format DD-MM-YYYY" /></td>
				</form>
			</tr>
			<br>
			<br>
			--- Security Question---
			<tr>
				<td>
					<select name="securityQuestion" id="securityQuestion" required>
						<option value="-1">Select a Security Question</option>
						<option value="What is your best friend's name?">What is your best friend's name?</option>
						<option value="What is the name of your favourite book?">What is the name of your favourite book?</option>
						<option value="What is your favourite game?">What is your favourite game?</option>
						<option value="At what time were you born?">At what time were you born?</option>
						<option value="What was the name of your first pet?">What was the name of your first pet?</option>	
					</select>
				</td>
				<td><input type="text" name="securityAnswer" maxlength="25" required/></td>
			</tr>
			--- Submit and Reset---
			<tr>
				<td colspan="2" align="center">
				<input type="submit"  value="Submit" onclick="showAlert()">
				<input type="reset" value="Reset">
				</td>
			</tr>
		 <tr>
		 	<td>
		 			
		 	
		 	</td>
		
		</tr>
		</table>

	</form>
</body>
</html>
----------------------------------------------------------------------------------------------------------------------------------------------------------
Feature: Registration feature
Scenario: user is trying to register invalid set of details
Given user is accessing Registration Page on  Browser

When user is trying submit data without entering 'firstname'  
Then 'Firstname should not be empty and must have alphabet characters only' alert message should display.

When user is trying submit data without entering 'lastname'
Then 'Lastname should not be empty and must have alphabet characters only' alert message should display.

When user is trying submit data without entering 'email'
Then 'You have entered an invalid email address!' alert message should display.

When user is trying submit data without entering 'password'
Then 'Password should not be empty / length be between 7 to 12' alert message should display.

When user is trying submit data without entering 'confirmPassword'
Then 'Confirm password and Password should match' alert message should display.

When user is trying submit data without entering 'gender'
Then 'Please Select gender' alert message should display.

When user is trying to submit date without entering 'dob'
 Then 'Please Select dob' alert message should display.


Scenario: user is trying to register valid set of details
Given user is accessing Registration Page on  Browser
When user is trying submit data
Then 'Your Registration with CapBook.com has successfully done plz check your registred email addres to activate your profile' alert message should display.
