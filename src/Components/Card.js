import React from 'react';

const Card = ( {name, email, id,} ) => {
    //druhy typ
    //const {name, email, id} = props - nie props.name staci name
    //treti typ
    //do parametrov funkcie - potom uz nie props.name ale len name
    return(
        <div className = 'tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5'>
            <img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default Card;