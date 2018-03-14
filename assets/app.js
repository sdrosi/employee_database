var config = {
    apiKey: "AIzaSyA7XK_IIO8txYSiZf9u9JGSVwjhqsTyCUw",
    authDomain: "employee-data-3f7b0.firebaseapp.com",
    databaseURL: "https://employee-data-3f7b0.firebaseio.com",
    projectId: "employee-data-3f7b0",
    storageBucket: "",
    messagingSenderId: "151164383923"
  };
  firebase.initializeApp(config);

//variables

var name = "";
var role = "";
var date = "";
var rate = "";
var database = firebase.database();
var sendData = database.ref();

$("#addEmployee").on("click", function(){
    
    event.preventDefault();

    name = $("#name-input").val().trim();
    console.log(name);
    role = $("#role-input").val().trim();
    console.log(role);
    date = $("#date-input").val().trim();
    console.log(date);
    rate = $("#rate-input").val().trim();
    console.log(rate);

    sendData.push({
        name : name,
        role : role,
        date : date,
        rate : rate
    })
});