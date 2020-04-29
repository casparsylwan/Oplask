const searchBtn = document.querySelector(".btn");
// const CONTAINER = document.getElementById("photo-container");

searchBtn.addEventListener("click", function() {
let key = "jKd2ZB94SdKUyTDtS2iNreUUXUrYLXqqTPRIVgE-AO8";
let keyWord = document.querySelector(".main-search").value;
let url = "https://api.unsplash.com/search/photos/?client_id=" + key + "&query=" + keyWord;

fetch(url)
    .then(function (data) {
        return data.json();
        
    })
    .then(function(data) {
        console.log(data);
        data.results.forEach(photo => {
            let result = `
                <div class="photo">
                    <img src="${photo.urls.small}">
                </div>
            `;
            
            $("#photo-container").append(result);

        });
    })
})