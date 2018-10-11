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


chrome.storage.sync.get(['sites'], function (result) {
    let rules = [];
    if (result.hasOwnProperty("sites")) {
        rules = result.sites;
        console.log("sss");
    } else {
        console.log("ddd");
        rules = ["https://www.jianshu.com",
            "https://blog.csdn.net",
            "http://www.360doc.com"];
    }
    let url = window.location.href;
    for (let siteUrl of rules) {
        let regx = siteUrl.replace("*", "(.*)") + "(.*)";
        if (new RegExp(regx).test(url)) {
            console.log("startup");
            document.addEventListener("copy", onCopy, false);
            break
        }
    }
});
