async function resolveAfter(ms) {
    await new Promise(resolve => setTimeout(resolve, ms));
}
resolveAfter(8000).then(() => {
    console.log("resolve is called after 8 seconds.")
})

