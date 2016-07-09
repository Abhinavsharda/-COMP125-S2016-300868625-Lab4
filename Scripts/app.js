/**
 * FileName: app.js
 * 
 * @author Abhinav sharda
 * @date July 8, 2016
 * 
 * StudentID: 300868625
 * @description This file is javascript file for the Form
 */

// IIFE - Immediately Invoked Function Expression

(function () {
    var form = document.getElementById("Registerform");
    form.addEventListener('submit', function () {
        event.preventDefault();
        console.log("Entered Information is captured:");
        var UserObject = {
            username : document.getElementById("UserName").value,
            password : document.getElementById("Password").value
        }
        console.log("Username: " + UserObject.username);
        console.log("Password: " + UserObject.password);
    });
})();