const FAVORITES = {}


const searchBtn = document.querySelector(".btn");
const PHOTOCONTAINER = document.getElementById("photo-container");
let counter = 1;


document.getElementById("home").addEventListener("click", event => {
    PHOTOCONTAINER.innerHTML = ""
})

document.getElementById("fav").addEventListener("click", event => {
    let lightboxContainer = document.querySelector(".lightbox-container")
    PHOTOCONTAINER.innerHTML = ""
    for (const key in FAVORITES) {
        if (FAVORITES.hasOwnProperty(key) && FAVORITES[key]) {
            const photo = FAVORITES[key];
            let divPhoto = document.createElement("div")
            divPhoto.setAttribute("class", "photo")
            let nextImage = document.createElement("img")
            nextImage.setAttribute("id", photo.id)
            nextImage.setAttribute("src", photo.urls.thumb)
            divPhoto.append(nextImage)
            $("#photo-container").append(divPhoto);

            document.getElementById(photo.id).addEventListener("click", event => {
                overlay.style.display = "block"
                lightboxContainer.style.display = "flex"
                lightboxContainer.innerHTML =
                    `<div class="options">
                        <a class="download" href=${photo.links.download}?force=true>Ladda Ner </a>
                        <div class="favorites">
                            <span class="star-icon">&#9733;</span>
                            <span class="favorites-text"></span>
                        </div>
                    </div>
                    <img src=${photo.urls.small}>
                    <div class="author">
                        <img class="author-icon" src=${photo.user.profile_image.small}> 
                        ${photo.user.name}
                    </div>`;
                addOrRemoveFavorites(photo)

            });

            overlay.addEventListener("click", event => {
                lightboxContainer.style.display = "none"
                overlay.style.display = "none";
                if(!FAVORITES[key]){
                    document.getElementById(photo.id).parentNode.remove();
                    
                }
            })

        }
    }


})


searchBtn.addEventListener("click", function () {
    let key = "jKd2ZB94SdKUyTDtS2iNreUUXUrYLXqqTPRIVgE-AO8";
    let keyWord = document.querySelector(".main-search").value;

    let url = "https://api.unsplash.com/search/photos/?client_id=" + key + "&query=" + keyWord + "&page=" + counter;

    let overlay = document.getElementById("overlay")
    let lightboxContainer = document.querySelector(".lightbox-container")
    PHOTOCONTAINER.innerHTML = ""
    fetch(url)
        .then(function (data) {
            return data.json();

        })
        .then(function (data) {
            console.log(data);

            data.results.forEach(photo => {
                let divPhoto = document.createElement("div")
                divPhoto.setAttribute("class", "photo")
                let nextImage = document.createElement("img")
                nextImage.setAttribute("id", photo.id)
                nextImage.setAttribute("src", photo.urls.thumb)
                divPhoto.append(nextImage)
                $("#photo-container").append(divPhoto);

                document.getElementById(photo.id).addEventListener("click", event => {
                    overlay.style.display = "block"
                    lightboxContainer.style.display = "flex"
                    lightboxContainer.innerHTML =
                        `<div class="options">
                            <a class="download" href=${photo.links.download}?force=true>Ladda Ner </a>
                            <div class="favorites">
                                <span class="star-icon">&#9733;</span>
                                <span class="favorites-text"></span>
                            </div>
                        </div>
                        <img src=${photo.urls.small}>
                        <div class="author">
                            <img class="author-icon" src=${photo.user.profile_image.small}> 
                            ${photo.user.name}
                        </div>`;
                    addOrRemoveFavorites(photo)

                });
            })
            overlay.addEventListener("click", event => {
                lightboxContainer.style.display = "none"
                overlay.style.display = "none";
            })
        })
})

function addOrRemoveFavorites(photo) {

    if (FAVORITES[photo.id]) {
        document.querySelector(".star-icon").style.webkitTextFillColor = "yellow"
        removeFromFavoritesListener(photo)
    }
    else {
        addToFavoritesListener(photo)

    }
}

function addToFavoritesListener(photo) {
    let favorites = document.querySelector(".favorites")
    favorites.querySelector(".favorites-text").innerText=" Lägg till Favoriter"
    
    favorites.addEventListener("click", event => {
        document.querySelector(".star-icon").style.webkitTextFillColor = "yellow"
        FAVORITES[photo.id] = photo
        removeFromFavoritesListener(photo)
    })
}

function removeFromFavoritesListener(photo) {
    let favorites = document.querySelector(".favorites")
    favorites.querySelector(".favorites-text").innerText=" Ta Bort Favoriter"
    favorites.addEventListener("click", event => {
        document.querySelector(".star-icon").style.webkitTextFillColor = "white"
        FAVORITES[photo.id] = ""
        addToFavoritesListener(photo)

    })

}

