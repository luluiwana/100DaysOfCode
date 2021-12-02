const CAT_PIC = "https://thatcopy.pw/catapi/rest/";
const cats = document.querySelector('.cats');

function addCat() {
    const cat_promise = fetch(CAT_PIC);
    cat_promise
        .then((Response) => {
            const processingImages = Response.json();
            return processingImages;
        })
        .then((gambarKoceng) => {
            let loading = document.querySelector('.lds-dual-ring');
            let link = gambarKoceng.webpurl;
            loading.remove();
            gambar = document.createElement("div");
            gambar.style.backgroundImage = `url('${link}')`;
            gambar.classList.add('gallery');
            cats.prepend(gambar);
        });
}
function loading() {
    loadImage = document.createElement("div");
    emptyDiv = document.createElement("div");
    loadImage.classList.add('lds-dual-ring');
    loadImage.append(emptyDiv);
    cats.prepend(loadImage);
}
btn_adopt.addEventListener("click", loading);
btn_adopt.addEventListener("click", addCat);
btn_adopt.addEventListener("mousedown", function () {
    btn_adopt.style.backgroundColor = "#e74c3c";
});
btn_adopt.addEventListener("mouseup", function () {
    btn_adopt.style.backgroundColor = "#c0392b";
});

