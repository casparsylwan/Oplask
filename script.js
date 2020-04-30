
//Variables
const searchBtn = document.querySelector(".btn");
const photoContainer = document.getElementById("photo-container");
let main = document.querySelector("main");
let btnBox = document.querySelector(".btn-box");
let navUp = document.querySelector(".nav-up");
let navDown = document.querySelector(".nav-down");
const overlay = document.getElementById("overlay");
const lightboxContainer = document.querySelector(".lightbox-container");
const favoritesList = document.getElementById("fav")
let viewingFavorites = false;

//Cashing variables
caching = [];


//Key unsplash
let key = "jKd2ZB94SdKUyTDtS2iNreUUXUrYLXqqTPRIVgE-AO8";

//Base url
let baseurl = "https://api.unsplash.com/search/photos/?client_id=";
let query = "&query=";
let page = "&page=";
let keyWord = " ";
let counter = 1;


//EventListeners

document.querySelector(".main-search").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        viewingFavorites = false;
        counter = 1;
        pageChange();
    }
});

searchBtn.addEventListener("click", function () {
    viewingFavorites = false;
    counter = 1;
    pageChange();
});

navUp.addEventListener("click", function () {
    counter++;
    pageChange();
});

navDown.addEventListener("click", function () {
    counter--;
    pageChange();
});


favoritesList.addEventListener("click", event => {
    counter = 1;
    navDown.style.visibility = "hidden";
    navUp.style.visibility = "hidden";
    viewingFavorites = true;
    fillFavoritesView()


})

//Main search function
function pageChange() {

    let keyWord = document.querySelector(".main-search").value;
    let url;

    //Default search is stockholm if nothing is choosen!
    if (keyWord === "") {

        url = url = baseurl + key + query + "stockholm" + page + counter;

    } else {

        url = baseurl + key + query + keyWord + page + counter;
    }

    photoContainer.innerHTML = "";

    let reduced = [];
    caching.forEach(cash => {
        if (cash.url == url) {
            reduced.push(cash);

        }
    });

    if (reduced.length > 0) {

        navVisibility(reduced[0].data);
        reduced[0].data.results.forEach(photo => {
            photoAdder(photo);
            enlargePhoto(photo)
        });

    } else {

        // Fetch Data img
        fetch(url).then(function (data) {

            return data.json();
        }).then(function (data) {

            //caching
            caching.push({ url: url, data: data });

            navVisibility(data);

            // Adding photos to the list!

            data.results.forEach(photo => {

                photoAdder(photo);
                enlargePhoto(photo);

            })
        })
    }
};

//nav visibility
function navVisibility(data) {

    //Navigations buttons visability depending on results!
    if (data.total_pages < 2) {

        navDown.style.visibility = "hidden";
        navUp.style.visibility = "hidden";

    } else if (counter === 1) {

        navDown.style.visibility = "hidden";
        navUp.style.visibility = "visible";

    } else if (counter > 1 && counter < data.total_pages) {
        navDown.style.visibility = "visible";
        navUp.style.visibility = "visible";

    } else {

        navDown.style.visibility = "visible";
        navUp.style.visibility = "hidden";
    }
}


//Adding photos to main view
function photoAdder(photo) {

    let divPhoto = document.createElement("div");
    divPhoto.setAttribute("class", "photo");
    let nextImage = document.createElement("img");
    nextImage.setAttribute("id", photo.id);
    nextImage.setAttribute("src", photo.urls.thumb);
    divPhoto.append(nextImage);
    $("#photo-container").append(divPhoto);

}

//Add Largephoto (show Lightbox)
function enlargePhoto(photo) {
    document.getElementById(photo.id).addEventListener("click", event => {
        overlay.style.display = "block"
        lightboxContainer.style.display = "flex"

        lightboxContainer.innerHTML =

            `<div class="options">
                <a class="download" href=${photo.links.download}?force=true>Ladda Ner</a>
                <div class="favorites">
                    <span class="star-icon">&#9733;</span>
                    <span class="favorites-text"></span>          
                </div>
                <span onclick="closeLightBox()" class="close">X</span>
            </div>
            <img src=${photo.urls.small}>
            <div class="author">
                <img class="author-icon" src=${photo.user.profile_image.small}> 
                ${photo.user.name}
            </div>`;
        addOrRemoveFavorites(photo)
    });



    overlay.addEventListener("click", closeLightBox)
}

function closeLightBox() {
    lightboxContainer.style.display = "none";
    overlay.style.display = "none";
}

//LocalStorage

function addToFavorite(id, photo) {

    localStorage.setItem(id, JSON.stringify(photo));
}

function getFavoriteItem(id) {

    return JSON.parse(localStorage.getItem(id));
}

function removeFromFavorite(id) {

    localStorage.removeItem(id);
}

//Not Used
function removeAll() {

    localStorage.clear();
}


//Favorites Functions
function fillFavoritesView() {
    photoContainer.innerHTML = ""
    Object.keys(localStorage).forEach(key => {
        const photo = getFavoriteItem(key)
        photoAdder(photo);
        enlargePhoto(photo);
    })
}

function addOrRemoveFavorites(photo) {

    if (getFavoriteItem(photo.id)) {
        document.querySelector(".star-icon").style.webkitTextFillColor = "yellow"
        removeFromFavoritesListener(photo)
    }
    else {
        addToFavoritesListener(photo)

    }
}

function addToFavoritesListener(photo) {
    let favorites = document.querySelector(".favorites")
    favorites.querySelector(".favorites-text").innerText = "Lägg till Favorit"

    favorites.addEventListener("click", event => {
        document.querySelector(".star-icon").style.webkitTextFillColor = "yellow"
        addToFavorite(photo.id, photo)
        removeFromFavoritesListener(photo)
        if (viewingFavorites) {
            fillFavoritesView()
        }
    })
}

function removeFromFavoritesListener(photo) {
    let favorites = document.querySelector(".favorites")
    favorites.querySelector(".favorites-text").innerText = "Ta Bort Favorit"
    favorites.addEventListener("click", event => {
        document.querySelector(".star-icon").style.webkitTextFillColor = "white"
        removeFromFavorite(photo.id)
        addToFavoritesListener(photo)
        if (viewingFavorites) {
            fillFavoritesView()
        }

    })

}
