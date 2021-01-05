const button_element=document.getElementById('button');
const input_element1=document.getElementById('search_gif');
const input_element2=document.getElementById('number_of_gif');
const giphyInformation=document.getElementById('gif_information');

let url;
function getGiphy(){
    fetch(url)
    .then(response => response.json())
    .then(gifData =>{
        for(const element of gifData.data){
            
            const image=document.createElement('img');
            const break_element=document.createElement('br')
                image.src=element.images.downsized_still.url;
                
            giphyInformation.appendChild(image)
            giphyInformation.appendChild(break_element)
      
            }
        });
}
function getGiphyInformation(){
    
    giphyInformation.innerHTML="";
    const inputSearchValue=input_element1.value
    url=`https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${inputSearchValue}&limit=25`
    getGiphy(); 
    
}

function getGiphyWithNumber(){
    giphyInformation.innerHTML="";
    const inputSearchValue=input_element1.value
let numberOfGifs=input_element2.value
url=`https://api.giphy.com/v1/gifs/search?api_key=KVf1MfNU3NN5hAcLCiXuulyFP3Np55HB&q=${inputSearchValue}&limit=${numberOfGifs}`
 getGiphy();

}

button_element.addEventListener('click',getGiphyInformation)
input_element2.addEventListener('input',getGiphyWithNumber)