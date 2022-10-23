const memeContainer = document.querySelector('.meme_container');
const btn = document.querySelector('.btn');
const img = document.querySelector('.img');
let URL = 'https://meme-api.herokuapp.com/gimme';



let memeGenerate = () => {
    fetch(URL).then((data) => {
        data.json().then(data => {
            loader()
            setTimeout(() => {
                img.setAttribute("src", data.url)
            })
        }, 1000);
    })


}


function loader() {
    var url1 = "";
    img.setAttribute("src", url1);
}

btn.addEventListener('click', memeGenerate)