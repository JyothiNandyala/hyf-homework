const redBoxElement = document.querySelector('ul.marks li:nth-child(1)');
const blueBoxElement = document.querySelector('ul.marks li:nth-child(2)');
const greenBoxElement = document.querySelector('ul.marks li:nth-child(3)');
//Should translate the circles one at a time from their random start position
function translateOneByOne() {
    const p1 = new Promise(resolve => {
        setTimeout(() => {
            resolve(moveElement(redBoxElement, { x: 20, y: 300 }))
        }, 1000)
    })
    p1.then(() => {
        console.log("redbox has been moved")
    })
    const p2 = new Promise(resolve => {
        setTimeout(() => {
            resolve(moveElement(blueBoxElement, { x: 400, y: 300 }))
        }, 2000)
    })
    p2.then(() => {
        console.log("bluebox has been moved")
    })
    const p3 = new Promise(resolve => {
        setTimeout(() => {
            resolve(moveElement(greenBoxElement, { x: 400, y: 20 }))
        }, 3000)
    })
    p3.then(() => {
        console.log("greenbox has been moved")
    })

}

translateOneByOne();

//Should translate all the circles at the same time from their random start position
async function translateAllAtOnce() {

    try {
        await Promise.all([moveElement(redBoxElement, { x: 20, y: 300 }), moveElement(blueBoxElement, { x: 400, y: 300 }), moveElement(greenBoxElement, { x: 400, y: 20 })])
        console.log("All the elements has been moved at a time")
    }
    catch (error) {
        console.log(error)
    }
}
translateAllAtOnce();