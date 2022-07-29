const download = (path, filename) => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
}; 

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(function(){
        download("pure-alpha.theme.css", "pure-alpha.theme.css")
    }, 1000)
})