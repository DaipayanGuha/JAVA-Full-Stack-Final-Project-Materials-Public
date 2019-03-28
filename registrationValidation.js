function validateLoginForm(){
	if(RegistrationSimple.email.values==""){
		alert("Enter Email ID.");
		return false;
	}
	else if(RegistrationSimple.password.value==""){
		alert("Enter Password");
		return false;
	}
}

function validateRegistrationForm(){
	if(registerForm.firstName.values==""){
		alert("Enter First Name");
		return false;
	}
	else if(registerForm.lastName.value==""){
		alert("Enter Last Name");
		return false;
	}
	else if(registerForm.emailId.value==""){
		alert("Enter Email ID.");
		return false;
	}
	else if(registerForm.password.value==""){
		alert("Enter a password");
		return false;
	}
	else if(registerForm.confirmPassword.value==""){
		alert("Please Confirm your Password");
		return false;
	}
	else if(registerForm.gender.value==""){
		alert("Please select a gender");
		return false;
	}
	else if(registerForm.dob.value==""){
		alert("Enter Date Of Birth");
		return false;
	}
	else if(registerForm.securityAnswer.value==""){
		alert("Enter Selected Security Question's Answer");
		return false;
	}
	
}

function validatePassword(){
	if(password_confirm.password.value.length>=6){
		if(password_confirm.password.value.search(/[0-9]/)!=-1 &&
				password_confirm.password.value.search(/[A-Z]/)!=-1 &&
				password_confirm.password.value.search(/[!@#$%^&*()_+]/)!=-1){
			return true;
		}
		else{
			alert("Password must contain atleast 1 number 1 uppcase letter and 1 special character");
			return false;
		}
	}
	else{
		alert("Length must be of Minimum 6 characters");
		return false;
	}
}
	
	function checkSame(){
		if(password_confirm.password.value != password_confirm.confirmPassword.value){
			alert("Password and confirm password do not match!");
			return false;
		}
	}





