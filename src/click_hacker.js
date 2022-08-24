(function () {
    function doSome(nodeArr) {
        for(let item of nodeArr) {
            item.style.setProperty('user-select', 'text')
        };
    }
    doSome(document.querySelectorAll('#content_views pre'))
    doSome(document.querySelectorAll('#content_views pre code'));

    chrome.storage.local.get('editableCSDN', (result) => {
        if (result.editableCSDN) {
            document.body.contentEditable='true';
            document.designMode='on';
        }
    })

    chrome.storage.onChanged.addListener(function(changes, namespace) {
        if (changes.editableCSDN.newValue) {
            document.body.contentEditable = 'true';
            document.designMode = 'on';
        } else {
            document.body.contentEditable = 'inherit';
            document.designMode = 'off';
        }
    });
})();

let more_btn = document.getElementById("btn-readmore");

if (more_btn) {
    more_btn.click();
}