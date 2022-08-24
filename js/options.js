var storage = chrome.storage.local;

$('#editableCSDN').change(function() {
    if($(this).prop('checked')) {
        storage.set({'editableCSDN' : 1});
    } else {
        storage.remove('editableCSDN');
    }
});

chrome.storage.local.get('editableCSDN', (result) => {
    if (result.editableCSDN) {
        $('#editableCSDN').prop('checked', 'checked');
        document.body.contentEditable='true';
        document.designMode='on';
    } else {
        $('#editableCSDN').removeProp('checked');
    }
})