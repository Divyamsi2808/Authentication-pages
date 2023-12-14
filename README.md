<h1>Signup, Login, and Logout with User Authentication</h1> 

<h2>Overview</h2>
<p>This project is a basic implementation of a user authentication system using JavaScript, ReactJS, and Tailwind CSS. It includes a responsive signup, login, and logout page where users can sign up with a username and password, log in, and log out.</p>

<h2>Technologies Used</h2>
<ul>
<li>JavaScript: The programming language used for client-side logic.</li>
<li>ReactJS: The JavaScript library used for building user interfaces.</li>
<li>Tailwind CSS: A utility-first CSS framework for styling the application.</li>
</ul>


<h2>Functionality</h2>
<h3>Signup</h3>
<ul>
<li>Users need to enter a username, email, phone and password.</li>
<li>Clicking the "Signup" button triggers the onSignup function.Then it verify the user is already exits or not.If new user creat an account then it will redirects to the home page.</li>
<li>The userslist data is stored in localStorage for simulation.Each user details are store in the usersList in the localStorage as a object</li>
</ul>
<img src = "https://res.cloudinary.com/dxaugnoxj/image/upload/v1702537908/samples/Screenshot_2023-12-14_123136_hxy75o.png"/>

<h3>Login</h3>
<ul>
<li>Users can enter their username and password.</li>
<li>Clicking the "Login" button triggers the onClickLogin function.</li>
<li>The user data is retrieved from localStorage for simulation.</li>
<li>If the entered credentials match, the user is considered logged in.</li>
</ul>
<img src = "https://res.cloudinary.com/dxaugnoxj/image/upload/v1702537907/samples/Screenshot_2023-12-14_123157_dpxkru.png"/>

<h3>Logout</h3>
<ul>
<li>Clicking the "Logout" button triggers the onLogout function.</li>
<li>The user data is removed from localStorage for simulation.</li>
<li>The user is considered logged out.</li>
</ul>

<div style="text-align: center;">
     <video style="max-width:80%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12);outline:none;" loop="true" autoplay="autoplay" controls="controls" muted>
    <source src="https://res.cloudinary.com/dxaugnoxj/video/upload/v1702538027/samples/React_App_-_Google_Chrome_2023-12-14_12-34-42_dmigkd.mp4" type="video/mp4">
  </video>
</div>

<h2>Setup</h2>
<h3>To run the project locally, follow these steps:</h3>
<ul>
<li>Clone the repository:</li>

```
gh repo clone Divyamsi2808/Authentication-pages

```
<li>Navigate to the project directory:</li>

```
cd authenticationpages
```
<li>Install dependencies:</li>

```
npm install
```
</ul>