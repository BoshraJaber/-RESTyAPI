import { render } from '@testing-library/react';
import React from 'react';
import ReactJson from 'react-json-view';
import { If, Else, Then } from 'react-if';
import { Link, Router } from 'react-router-dom';

function handleDisplayDetails(e){
    
    let x = JSON.parse(e.view.localStorage.History) || alert('Local Storage is Empty')
    console.log(x[0].data)
    let historyEntry = e.target.innerText;
    let selectedMethod = historyEntry.split(/:(.+)/)[0].toLowerCase();
    let selectedURL= historyEntry.split(/:(.+)/)[1];
    let id = e.target.id;
    render(
      
        <>
        {/* <Router>
        <Link id='link' to={{ pathname: '/'}}>Re Run</Link>
        </Router> */}
         <If condition={id}>
          <Then>
              <div>
              <p>Method: {selectedMethod.toUpperCase()}</p>
        <p>API URL: {selectedURL}</p>
        <p>Headers: <ReactJson
        src={x[id].data.headers}
        name="Headers"
        iconStyle={'square'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={true}
      />
      </p>
      <p>Response: <ReactJson
        src={x[id].data.body}
        name="Response"
        iconStyle={'square'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={true}
      />
      </p>
              </div>
          </Then>
        <Else>
            <p>An error occurred while getting details</p>
        </Else>
        </If>
 
     </>
    )

}

function History(){
    let displayHistory =  localStorage.getItem("History") ? JSON.parse(localStorage.getItem("History")) : [];
   return(
<>
<section id="history">
<h3>History:</h3>
    {

displayHistory.map((entry,idx) =>{
   return <div key={entry.method,entry.url}  onClick={handleDisplayDetails}>
        <section id={idx}>{entry.method.toUpperCase()}: {entry.url}</section>

    </div>
})
}
</section>
</>
)}


export default History;
