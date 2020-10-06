const seven = document.getElementById('seven')
const sevenThirty = document.getElementById('seven-thirty')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const thirteen = document.getElementById('thirteen')
const thirteenThirty = document.getElementById('thirteen-thirty')
const seventeen = document.getElementById('seventeen')
const nineteen = document.getElementById('nineteen')

const date = new Date();
let hh = date.getHours()
let mm = date.getMinutes();
let ss = date.getSeconds();


function backGroundColor(){
    if( hh === 7 && mm <= 29){
        seven.style.backgroundColor = '#0ae9c0';
    } else if( hh === 7 && mm <= 59){
        sevenThirty.style.backgroundColor = '#0ae9c0';
    } else if( hh === 8){
        eight.style.backgroundColor = '#0ae9c0';
    } else if ( hh === 9 || hh === 10 || hh === 11 || hh === 12){
        nine.style.backgroundColor = '#0ae9c0';
    } else if ( hh === 13 && mm <= 29 ){
        thirteen.style.backgroundColor = '#0ae9c0';
    } else if ( hh === 13 && mm >=30 || hh === 14 || hh == 15 || hh == 16){
        thirteenThirty.style.backgroundColor = '#0ae9c0';
    } else if ( hh === 17 || hh === 18 ){
        seventeen.style.backgroundColor = '#0ae9c0';
    } else if ( hh >= 19 ){
        nineteen.style.backgroundColor = '#0ae9c0';
    }   
}

backGroundColor();

const breedList = 'https://dog.ceo/api/breeds/list';
const randomImage = 'https://dog.ceo/api/breeds/image/random'
const select = document.getElementById('inputGroupSelect01');
const image = document.getElementById('image');
const breedImage = document.querySelector('.breed-image')



function fetchData(url){
    return fetch(url)
            .then(response => response.json())
}



fetchData( breedList )
    .then( data => {
        generateOptions(data.message) 
    })



function generateOptions(data){
    const option = data.map( item => 
        `<option value = ${item}>${item}</option>`
    ).join('')
    select.innerHTML = option;
}

fetchData(randomImage)
    .then( data => generateImage(data.message))

function generateImage(data){
    const htmlImage = `
    <img src="${data}" class="rounded mx-auto d-block mt-3" alt="...">
    <p>Click for more ${select.value} image.
    `;
    image.innerHTML = htmlImage;
}

function fetchBreedImage(){
    const breed = select.value;
    const img = breedImage.querySelector('img')
    const p = breedImage.querySelector('p')
    
    fetchData(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then( data => {
            img.src = data.message
            p.textContent = `Click for more ${select.value} image`
        })
}

// fetchData('https://dog.ceo/api/breeds/image/random/3')
//     // .then( data => console.log(data.message))
//     .then( data => random(data.message));

// function random(data){
//     const html = data.map( image => 
//         `<h1>${image}</h1>`).join('')
//     galleryImage.innerHTML = html;
// }

select.addEventListener('change', fetchBreedImage);
breedImage.addEventListener('click', fetchBreedImage )



















