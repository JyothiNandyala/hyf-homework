const paragraph_element=document.getElementById('paragraph')

fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json())
.then(facts=>{
    console.log(facts)

    const li=document.createElement('li')
    const factInformation=facts.status;
    console.log(factInformation)
    
    paragraph_element.textContent=factInformation;
    
    document.body.appendChild(paragraph_element)
})