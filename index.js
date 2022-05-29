// Spread Operator ---> works objects and Arrays
// var x; // Declaration
// x = 0; // Initilization
// x = 1; // Re-Initialization

// Array Spread
// const arr = [1,{x: 100},3];

// // const newArr = [4, ...arr, 6] ;


// function ModArr(arr) {
//   arr[1]['x'] = 10000;
//   console.log("Inside Function", arr);
// }

// ModArr(arr.copyWithin());

// console.log("Arr", arr);

// console.log("New Arr", newArr);


// Spread with Objects
// const obj = {
//   name: "Sanjay",
//   role: "Dev"
// }

// const newObj = {...obj, 'DOB': 'yy-mm-dd', A: '100'};

// // newObj['role'] = "Engineer";


// // console.log("Obj", obj);
// console.log("newObj", newObj);



// Temlate Literals
// const x=10;
// const y={ score: 10 };

// // Score of X: 10, Score of Y: 20

// console.log("Score of x: " + x + " , Score of Y: " + y);
// console.log("Score of x:", x, ", Score of Y:", y);
// console.log(`Score of x: ${x} , Score of Y: ${y.score}`);

// const arrStudents = [ { name: "Sanjay", id: 1 }, { name: "Saravanan", id: 2 }] 

// // login
// //   | ---> Success -> Stoploading ---> Home
// //   | ---> Failure -> stoploading -> show Error



// try {
//   console.log("Line 1"); 
//   console.log("Try Login");
// } catch (error) {
//   console.log(error);
//   console.log("Show error to user");
// } finally {
//   console.log("Stop Loading");
// }








// Create Obj which is capable of making an API Call
const request = new XMLHttpRequest();

// Open the connect to the API with HTTP method & URL
request.open("GET", "https://restcountries.com/v3.1/all", true);

// Send the Request to the Server 
request.send(null);

// Parse the Text Passed on from the server
request.onload = function () {
  var response = JSON.parse(request.responseText);
  console.log(response);
  response.forEach(countryObj => {
    const countryName = countryObj.name.common;
    
    getWeather(countryName, ...countryObj.latlng);
    // console.log(countryName, ...countryObj.latlng);
  });
}

const WEATHER_API_KEY = "ce457bd2e112939a831a68d073d414d2";
const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather"

// API Url: https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getWeather(name, lat, lng) {
  const request = new XMLHttpRequest();

  // Open the connect to the API with HTTP method & URL
  request.open("GET", `${WEATHER_API_URL}?lat=${lat}&lon=${lng}&appid=${WEATHER_API_KEY}`, true);

  // Send the Request to the Server 
  request.send(null);

  request.onload = function () {
    var response = JSON.parse(request.responseText);
    console.log(name, response.main.temp);
  }

}








