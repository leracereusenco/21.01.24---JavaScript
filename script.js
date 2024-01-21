function checkNum(){
    const inpt = document.getElementById("input");
    if (!inpt.checkValidity()){
        document.getElementById("success").innerHTML = inpt.validationMessage;
    }else{
        document.getElementById("success"). innerHTML = "Input OK"; 
    }
}





// const msg = document.getElementById("success");
// function getLocation(){

//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         msg.innerHTML = "Location Error";
//     }
// }

// function showPosition(position){
//     msg.innerHTML = "Latitude: " + position.coords.latitude
//                 + "<br>Longitude: " + position.coords.longitude;

//}







// const msg = document.getElementById("success");
// function getLocation(){

//     if (navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }else{
//         msg.innerHTML = "Location Error";
//     }
// }

// function showPosition(position){
//     let pos = "Latitude: " + position.coords.latitude
//                 + "<br>Longitude: " + position.coords.longitude;
//                 localStorage.setItem("pos", pos);
// }

// localStorage.setItem("name", "max");   //localStorage == sessionStorage
// document.getElementById("success").innerHTML = localStorage.getItem("pos"); //name - cheie, dupa care se cauta item-ul in storage
 
//storage-ul local salveaza informatia si ea nu dispare dupa refresh de pagina















//Request -> server    
//xml, http


// fetch (url)
    //.then(response => {
        //console.log(response.status/redirect/...)
    //})
    //.catch(error => {
        //console.log("error")
    //})


    async function fetchText() {  //async - returneaza
        let response = await fetch('readme.txt'); // await - asteapta sa primeasca ceva
        let data = response.text();
        console.log(data);
    }
