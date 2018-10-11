function onCopy(e) {
    const data = window.getSelection().toString();
    console.log(data);
    if (e.clipboardData) {
        e.clipboardData.setData("text/html", data);
        e.clipboardData.setData("text/plain", data);
    } else if (window.clipboardData) {
        window.clipboardData.setData("text", data)
    }

    e.preventDefault();
}



chrome.storage.sync.get(['sites'], function (result) {
    if (result) {
        let url = window.location.href;
        for (let siteUrl of result.sites) {
            let regx = siteUrl.replace("*", "(.*)") + "(.*)";
            if (new RegExp(regx).test(url)) {
                console.log("startup");
                document.addEventListener("copy", onCopy, false);
            }
        }
    }
});
