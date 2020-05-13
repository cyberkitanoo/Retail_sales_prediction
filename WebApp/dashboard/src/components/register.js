import React from "react"
import './App.css';

class Register extends React.Component{
    render(){
        return(
            <div>
                <!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<div class="image-container">
<div class="text">
<h1>Register Here</h1>
</div></div>

<div class="center1">
<button onclick="document.getElementById('id01').style.display='block'" style="width:auto";>Register</button>
</div>

<div id="id01" class="modal">
  
  <form class="modal-content animate" action="/action_page.php" method="post">
    <div class="imgcontainer">
      <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
      <img src="img_avatar2.png" alt="Avatar" class="avatar">
    </div>

    <div class="container">
      <label for="fname"><b>First Name</b></label>
      <input type="text" id="fname" name="firstname" placeholder="Enter your first name">

      <label for="lname"><b>Last Name</b></label>
      <input type="text" id="lname" name="lastname" placeholder="Enter your last name">

      <label for="emailid"><b>Email id</b></label>
      <input type="text" placeholder="Enter Email ID" name="emailid" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
        
      <button onclick="document.location = '----.html'" type="submit" style="padding:12px 20px;">Register</button>
       </div>

    <div class="container" style="background-color:#f1f1f1">
      <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
      
    </div>
  </form>
</div>

<script>
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
</script>

</body>
</html>

            </div>
        )
    }
}

export default Register
