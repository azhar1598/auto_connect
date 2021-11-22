function injectTheScript() {
    let conn
if(document.getElementById('press').innerHTML=="Start Connecting"){
    document.getElementById('press').innerHTML="Stop Connecting";
    document.getElementById('press').style.backgroundColor="red"
    conn=true
}else{
    document.getElementById('press').innerHTML="Start Connecting";
    document.getElementById('press').style.backgroundColor="green"
    conn=false
}

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Injects JavaScript code into a page  
        chrome.tabs.executeScript(tabs[0].id, {file: conn?"utilities.js":"stop.js"});
    });

chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
    if(request.message==="message sent"){
        chrome.storage.local.get("invitations",value=>{
sessionStorage.setItem('invitations',value.invitations)
console.log(document.getElementById('invitations').innerHTML)
        })
    }
})


setInterval(()=>{
   setTimeout(()=>{
  document.getElementById('invitations').innerHTML=`${sessionStorage.getItem('invitations')} invitations sent`
   },
   1500)
},3000)
}

// adding listener to your button in popup window

document.getElementById('press').addEventListener('click', injectTheScript)




