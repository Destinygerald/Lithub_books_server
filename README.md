# LibHub Auth Service

## About
A server that provides authentication services for the LibHub server

**Services include**
- Login
- Signup
- Profile
- Forget Password
- Reset Password

## Services Endpoint
- POST */signup* : It body should have: 
	- Name
	- Email
	- Password
	- Confirm_Password

- POST */login* : Login with email and password; Generate token and add to cookie
	- Email
	- Password

- GET */profile* : works with the cookie
	
	Response: 
``` json
		{
			"id": "12h73jhd93",
			"name": "John Doe",
			"Email": "johndoe@gmail.com"
		}
```

- POST */forget-password* : requires the user email, then an email is forwarded to the user with the reset password link; There will be  a forget password model and It's data will be the user email, the generated reset id and a boolean value to confirm if the link is still active

- POST */reset-password/:id* : A  