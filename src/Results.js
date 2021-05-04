import React from 'react';
import ReactJson from 'react-json-view';
import { If, Then, Else } from 'react-if';

function Results(props) {
    return (
        <>
          <If condition={!props.count}>
          <Then>
        <div></div>
        </Then>
        <Else>
        <div id="json">
           Counts:  {props.count}
           <br/>
        <ReactJson
        src={props.headers}
        name="Headers"
        // theme = 'summerfruit:inverted'
        iconStyle={'square'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={true}
      />

<ReactJson
        src={props.results}
        name="Response"
        iconStyle={'square'}
        collapsed={false}
        enableClipboard={false}
        displayDataTypes={false}
        displayObjectSize={true}
      />
        </div>
        </Else>
          </If>
       
        </>
    )
  }
  
export default Results;





// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON