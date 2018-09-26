document.addEventListener("DOMContentLoaded",() => {
    console.log("Page loaded");
    chipSetup();
});

function chipSetup() {
    console.log("Starting chips...")
    var elems = document.querySelectorAll(".chips");
    var instances = M.Chips.init(elems,{
        placeholder:"Start typing and press enter...",
        data:[
            {
                tag: "Hello"
            },
            {
                tag: "World"
            }
        ],
        onChipAdd:function(){
            console.log(this.chipsData);
            let data = this.chipsData.map(item => item.tag);
            affectGallery(data);
        },
        onChipDelete:function(){
            console.log(this.chipsData);
            let data = this.chipsData.map(item => item.tag);
            affectGallery(data);

        }
    });
}

function affectGallery(chipsData){
    let gallery = document.getElementById("gallery");
    
    // remove nodes

    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild);
    }

    // add new nodes

    for (let chip of chipsData){
        gallery.appendChild(makeCard(chip));
    }

    let elems = document.querySelectorAll(".materialboxed");
    let instances = M.Materialbox.init(elems);
}

function makeCard(data){
    let card = document.createElement("div");
    card.className = "small card col s12 m5 l3 offset-m1 offset-l1";

    let cardImage = document.createElement("div");
    cardImage.className = "card-image";

    let image = document.createElement("img");
    image.className = "materialboxed";
    image.src = "/img/placeholder.jpg";

    let span = document.createElement("span");
    span.innerText = data;

    cardImage.appendChild(image);

    card.appendChild(cardImage);

    return card
}