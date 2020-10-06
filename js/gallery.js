const gallery = document.getElementById('gallery');
const row = document.querySelector('.row');
const input = document.querySelector('.form-control');
const btn = document.querySelector('.btn');

function fetchData(url){
    return fetch(url)
            .then(response => response.json())
}

fetchData('https://dog.ceo/api/breeds/image/random/5')
    .then( data => galleryImage(data.message));

function galleryImage(data){
    const image = data.map( item => 
        `<div class="dogs col-md-3 "> 
            <img src="${item}" alt="..." class="img-thumbnail">
        </div>`
        ).join('')
    row.innerHTML = image;
}

btn.addEventListener('click' , () => {
    row.innerHTML = `<p>Loading...</p>`

    if ( input.value <= 50){
        fetchData(`https://dog.ceo/api/breeds/image/random/${input.value}`)
            .then( data => galleryImage(data.message));

        function galleryImage(data){
            const image = data.map( item => 
                `<div class="dogs col-md-3 "> 
                    <img src="${item}" alt="..." class="img-thumbnail">
                </div>`
                ).join('')
            row.innerHTML = image;
    }
        input.value = '';
    } else {
        alert('Kindly input a number ranging from 1 to 50')
        input.value = '';
    }
    
})
// row.style.backgroundColor = 'yellow'