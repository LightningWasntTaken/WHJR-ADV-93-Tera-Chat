function addUser() {
    user_name = document.getElementById("user_name_input").value;
    localStorage.setItem("user_name_input" , user_name);
    window.location = "tera_room.html";

}