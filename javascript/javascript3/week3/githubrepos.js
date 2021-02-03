let promise1 = fetch(`https://api.github.com/search/repositories?q=user:rajani`)
let promise2 = fetch(`https://api.github.com/search/repositories?q=user:sandhana`)
let promise3 = fetch(`https://api.github.com/search/repositories?q=user:jyothinandyala`)
Promise.all([promise1, promise2, promise3])
    .then(files => {
        files.forEach(file => {
            renderPromises(file.json())
        })
    })
    .catch(err => {
        console.log(err)
    })

let renderPromises = (prom) => {
    prom.then(data => {
        console.log(data)

        let liElement = document.createElement('li');
        let ulElement = document.getElementById('output');
        let h2Element = document.createElement('h2');
        h2Element.innerHTML = `${data.items[0].owner.login}'s Repositores`

        liElement.textContent = `FullName:${data.items[0].full_name}
         Owner:${data.items[0].owner.login}
         ReposUrl:${data.items[0].owner.repos_url}`;
        ulElement.appendChild(h2Element)
        ulElement.appendChild(liElement)


    })
}