import React from 'react';
import './Help.scss'

function Help(){
return(
    <>
    <h3 id="helpHeader">How to use this Application:</h3>
    <ol id="helpOl">
        <li>Provide the API URL you want to test in the input field.</li>
        <li>Choose the rest method.</li>
        <li>Click on GO! to see the results.</li>
        <li>See search history displayed on the left of the screen.</li>
        <li>See an error in case anything went wrong.</li>
        <li>Checkout the History Page for your saved queries</li>
    </ol>
    </>
)}


export default Help;