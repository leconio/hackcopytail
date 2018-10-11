document.getElementById("submitRules").onclick = () => {
    let textRules = document.getElementById("rules").value;
    console.log(textRules);
    if (textRules) {
        let rules = {
            "sites": []
        };
        textRules.split(/[\s\n]/).forEach((value) => {
            if (value) {
                rules.sites.push(value);
            }
        });
        chrome.storage.sync.set(rules, function () {
            alert("Saved!")
        });
    }
};

chrome.storage.sync.get(['sites'], function (result) {
    if (result) {
        let textRules = document.getElementById("rules");
        textRules.value = result.sites.join("\n");
    }
});

document.getElementById("rules").value = "https://www.jianshu.com\n" +
    "https://blog.csdn.net\n" +
    "http://www.360doc.com";
