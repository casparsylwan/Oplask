
//Variables
const searchBtn = document.querySelector(".btn");
const photoContainer = document.getElementById("photo-container");
let main = document.querySelector("main");
const overlay = document.getElementById("overlay");
const lightboxContainer = document.querySelector(".lightbox-container");

//Key unsplash
let key = "jKd2ZB94SdKUyTDtS2iNreUUXUrYLXqqTPRIVgE-AO8";

//Base url
let baseurl = "https://api.unsplash.com/search/photos/?client_id=";
let query = "&query=";
let page = "&page=";
let counter=1;

//EventListenrs
searchBtn.addEventListener("click", function () {

    let keyWord = document.querySelector(".main-search").value;
    let url = baseurl + key + query + keyWord + page + counter;
    //console.log(counter++);
    document.getElementById("photo-container").innerHTML="";
    keyWord = document.querySelector(".main-search").value;
    // Fetch Data img
    fetch(url).then(function (data) { 
        console.log(data);
        return data.json();
    }).then(function (data){  
                console.log(data)               
                 data.results.forEach( photo => {
                 console.log("hej");   
                let divPhoto = document.createElement("div");
                 divPhoto.setAttribute("class", "photo");
                let nextImage = document.createElement("img");
                 nextImage.setAttribute("id", photo.id);
                 nextImage.setAttribute("src", photo.urls.thumb);
                 divPhoto.append(nextImage);
                 $("#photo-container").append(divPhoto);

             });
            });
        });
        


// const searchBtn = document.querySelector(".btn"); // Done
// // const CONTAINER = document.getElementById("photo-container"); // Done
// let counter=1; // Done
// searchBtn.addEventListener("click", function () {
//     let key = "jKd2ZB94SdKUyTDtS2iNreUUXUrYLXqqTPRIVgE-AO8"; //Done
//     let keyWord = document.querySelector(".main-search").value; //Done
    
//     let url = "https://api.unsplash.com/search/photos/?client_id=" + key + "&query=" + keyWord+"&page=" + counter; //Done

//     // let main = document.querySelector("main") //Done
//     let overlay = document.getElementById("overlay") //Done
//     let lightboxContainer = document.querySelector(".lightbox-container"); //Done
//     document.getElementById("photo-container").innerHTML="" //Done



//     // Fetch Data img
//     fetch(url)
//         .then(function (data) {
//             return data.json();

//         })
//         .then(function (data) {
//             console.log(data);
            
//             data.results.forEach(photo => {
               
//                 let divPhoto = document.createElement("div")
//                 divPhoto.setAttribute("class", "photo")
//                 let nextImage = document.createElement("img")
//                 nextImage.setAttribute("id", photo.id)
//                 nextImage.setAttribute("src", photo.urls.thumb)
//                 divPhoto.append(nextImage)
//                 $("#photo-container").append(divPhoto);

//                 document.getElementById(photo.id).addEventListener("click", event => {
//                     overlay.style.display = "block"
//                     lightboxContainer.style.display = "flex"
//                     lightboxContainer.innerHTML =
//                         `<div class="options">
//                             <span class="download">Ladda Ner </span>
//                             <span class="favorites">Lägg till Favoriter</span>
//                         </div>
//                         <img src=${photo.urls.small}>
//                         <div class="author">
//                             <img class="author-icon" src=${photo.user.profile_image.small}> 
//                             ${photo.user.name}
//                         </div>`
//                 });

//                 let btnPagination = document.createElement("div");
//                 lightboxContainer.then(lightboxContainer).append(btnPagination).innerHTML = "<button>Caspar</button>"
                
//             })
//             overlay.addEventListener("click", event => {
//                 lightboxContainer.style.display = "none"
//                 overlay.style.display = "none";
//             })
//         })
// })



// example.forEach(photo => {
    // main.innerHTML += `<img id= ${e.id} src=${e.urls.thumb}>` Funkar inte












    // let example = [{
    //     "id": "eOLpJytrbsQ1",
    //     "created_at": "2014-11-18T14:35:36-05:00",
    //     "width": 4000,
    //     "height": 3000,
    //     "color": "#A7A2A1",
    //     "likes": 286,
    //     "liked_by_user": false,
    //     "description": "A man drinking a coffee.",
    //     "user": {
    //         "id": "Ul0QVz12Goo",
    //         "username": "ugmonk",
    //         "name": "Jeff Sheldon",
    //         "first_name": "Jeff",
    //         "last_name": "Sheldon",
    //         "instagram_username": "instantgrammer",
    //         "twitter_username": "ugmonk",
    //         "portfolio_url": "http://ugmonk.com/",
    //         "profile_image": {
    //             "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
    //             "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
    //             "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
    //         },
    //         "links": {
    //             "self": "https://api.unsplash.com/users/ugmonk",
    //             "html": "http://unsplash.com/@ugmonk",
    //             "photos": "https://api.unsplash.com/users/ugmonk/photos",
    //             "likes": "https://api.unsplash.com/users/ugmonk/likes"
    //         }
    //     },
    //     "current_user_collections": [],
    //     "urls": {
    //         "raw": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f",
    //         "full": "https://hd.unsplash.com/photo-1416339306562-f3d12fefd36f",
    //         "regular": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=720&fit=max&s=92f3e02f63678acc8416d044e189f515",
    //         "small": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb",
    //         "thumb": "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=8aae34cf35df31a592f0bef16e6342ef"
    //     },
    //     "links": {
    //         "self": "https://api.unsplash.com/photos/eOLpJytrbsQ",
    //         "html": "http://unsplash.com/photos/eOLpJytrbsQ",
    //         "download": "http://unsplash.com/photos/eOLpJytrbsQ/download"
    //     }
    // }, {
    //     "id": "Dwu85P9SOIk",
    //     "created_at": "2016-05-03T11:00:28-04:00",
    //     "updated_at": "2016-07-10T11:00:01-05:00",
    //     "width": 2448,
    //     "height": 3264,
    //     "color": "#6E633A",
    //     "downloads": 1345,
    //     "likes": 24,
    //     "liked_by_user": false,
    //     "description": "A man drinking a coffee.",
    //     "exif": {
    //         "make": "Canon",
    //         "model": "Canon EOS 40D",
    //         "exposure_time": "0.011111111111111112",
    //         "aperture": "4.970854",
    //         "focal_length": "37",
    //         "iso": 100
    //     },
    //     "location": {
    //         "city": "Montreal",
    //         "country": "Canada",
    //         "position": {
    //             "latitude": 45.473298,
    //             "longitude": -73.638488
    //         }
    //     },
    //     "tags": [
    //         { "title": "man" },
    //         { "title": "drinking" },
    //         { "title": "coffee" }
    //     ],
    //     "current_user_collections": [ // The *current user's* collections that this photo belongs to.
    //         {
    //             "id": 206,
    //             "title": "Makers: Cat and Ben",
    //             "published_at": "2016-01-12T18:16:09-05:00",
    //             "updated_at": "2016-07-10T11:00:01-05:00",
    //             "cover_photo": null,
    //             "user": null
    //         },
    //         // ... more collections
    //     ],
    //     "urls": {
    //         "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
    //         "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
    //         "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
    //         "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
    //         "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
    //     },
    //     "links": {
    //         "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
    //         "html": "https://unsplash.com/photos/Dwu85P9SOIk",
    //         "download": "https://unsplash.com/photos/Dwu85P9SOIk/download",
    //         "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
    //     },
    //     "user": {
    //         "id": "QPxL2MGqfrw",
    //         "updated_at": "2016-07-10T11:00:01-05:00",
    //         "username": "exampleuser",
    //         "name": "Joe Example",
    //         "portfolio_url": "https://example.com/",
    //         "bio": "Just an everyday Joe",
    //         "location": "Montreal",
    //         "total_likes": 5,
    //         "total_photos": 10,
    //         "total_collections": 13,
    //         "profile_image": {
    //             "small": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
    //             "medium": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64&s=5a9dc749c43ce5bd60870b129a40902f",
    //             "large": "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=32085a077889586df88bfbe406692202"
    //         },
    //         "links": {
    //             "self": "https://api.unsplash.com/users/exampleuser",
    //             "html": "https://unsplash.com/exampleuser",
    //             "photos": "https://api.unsplash.com/users/exampleuser/photos",
    //             "likes": "https://api.unsplash.com/users/exampleuser/likes",
    //             "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
    //         }
    //     }
    // }]