function welcome(){
    var first = document.getElementById("FirstName").value; 
    var last = document.getElementById("LastName").value;
    var welcomeF = "Welcome " + first +" "+ last;
    console.log(welcomeF);
    window.alert(welcomeF);
    return false; //To prevent it from going into next page.
}


