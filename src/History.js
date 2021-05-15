import React from 'react';
// import { If, Else, Then } from 'react-if';

function handleDisplayForm(e){
    
    let historyEntry = e.target.innerText;
    // GET: https://official-joke-api.appspot.com/random_joke
let selectedMethod = historyEntry.split(/:(.+)/)[0].toLowerCase()
    // console.log(historyEntry.split(/:(.+)/)[0].toLowerCase())
    const inputURL = document.getElementById('url-input');
    inputURL.value = historyEntry.split(/:(.+)/)[1];
    const method = document.getElementById(selectedMethod);
    method.checked = true;
    const button = document.getElementById('submitBtn')
    button.click();
}

function HistorySection(){
    let displayHistory =  localStorage.getItem("History") ? JSON.parse(localStorage.getItem("History")) : [];
   return(
<>
<section id="history">
<h3>History:</h3>
    {

displayHistory.map(entry =>{
   return <div key={entry.method,entry.url} onClick={handleDisplayForm}>
        <section id="entryHistory">{entry.method.toUpperCase()}: {entry.url}</section>

    </div>
})
}
</section>
</>
)}


export default HistorySection;
