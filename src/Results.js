import React from 'react';


function Results(props) {
    return (
        <>
        <div>
           Counts:  {props.count}
           <br/>
           Header: {props.results}

 { console.log(props.results)}
        </div>

        </>
    //   <ul>
    //     {
    //       props.Results.map((person,index)=>{
    //         return(
    //           <li key={person.name}>
    //             <a href={person.url}>{person.name}</a>
    //           </li>
    //         )
    //       })
    //     }
    //   </ul>
    )
  }
  
  export default Results;









// Renders the count
// Renders the Result Headers as “pretty” JSON
// Renders the Result Body as “pretty” JSON