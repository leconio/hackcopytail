
function onCopy(e) {
    const data = window.getSelection().toString();
    if (e.clipboardData) {
        e.clipboardData.setData("text/html", data);
        e.clipboardData.setData("text/plain", data);
    } else if (window.clipboardData) {
        window.clipboardData.setData("text", data)
    }

    e.preventDefault();
}

console.log("startup");
document.addEventListener("copy", onCopy, false);
