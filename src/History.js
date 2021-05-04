import React from 'react';

function History(){
    let displayHistory =  localStorage.getItem("History") ? JSON.parse(localStorage.getItem("History")) : [];
   return(
<>
<section id="history">
<h3>History:</h3>
    {

displayHistory.map(entry =>{
   return <div key={entry.method,entry.url}>
        <section id="entryHistory">{entry.method.toUpperCase()}: {entry.url}</section>

    </div>
})
}
</section>
</>
)}
// return (
//     <ul>
//       {pokemons.map((pokemon) => (
//         <ListItem key={pokemon.name} pokemon={pokemon} />
//       ))}
//     </ul>

export default History;
