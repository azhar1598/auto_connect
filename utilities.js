
function goToActivityTab() {
    let m = 2;
    let a = document.getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--secondary ember-view')
    let b = document.getElementsByClassName('ml1 artdeco-button artdeco-button--2 artdeco-button--primary ember-view')

    setInterval(() => {
        if (a[m].innerText == "Connect") {
            a[m].click()
            setTimeout(() => {
                b[0].click()
            }, 1500)
        }

        chrome.storage.local.set({ 'invitations': m-1 });
        chrome.runtime.sendMessage({ message: 'message sent' })
        m = m + 1;
    }, 3000)
}

goToActivityTab();

