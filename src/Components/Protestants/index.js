import React from 'react';

function Protestants() {
    
        return (
    
            <div>
                <h3>Protestants</h3>
                <p>Protestants are concentrated in Prussia and the other northern states. Rigidly patriotic and nationalistic, they are deeply distrustful of their Catholic neighbours to the south, thinking them more loyal to the Pope than Germany.</p>
                <h4>Opinions</h4>
                <p>General ideology: <b>Conservative</b></p>
                <p>Democracy vs aristocracy: <b>Mixed</b></p>
                <p>Free trade vs protectionism: <b>Generally prefer free trade</b></p>
                <p>Capitalism vs socialism: <b>Strongly capitalist</b></p>
                <p>Imperialism: <b>In favour</b></p>
                <p>Main rival: <b>Catholics</b></p>
                <p>Friendly nations: <b>Britain</b> (shared religious conviction)</p>
                <p>Hostile nations: <b>France, Austria</b> (opposite religious conviction and Franco-Prussian war)</p>
            </div>
    
        );
    }

function Catholics() {

    return (
        <div>
                <h3>Catholics</h3>
                <p>Concentrated in the southern states, particularly Bavaria and Baden. They are wary of the north and loyal to the Pope.</p>
                <h4>Opinions</h4>
                <p>General ideology: <b>Conservative</b></p>
                <p>Democracy vs aristocracy: <b>Slightly favour aristocracy</b></p>
                <p>Free trade vs protectionism: <b>Mixed</b></p>
                <p>Capitalism vs socialism: <b>Generally capitalist</b></p>
                <p>Imperialism: <b>Generally opposed</b></p>
                <p>Main rival: <b>Protestants</b></p>
                <p>Friendly nations: <b>Austria, Italy</b> (shared religious conviction)</p>
                <p>Hostile nations: <b>Britain</b> (opposite religious conviction)</p>
            </div>
    )
}

function Junkers() {
    return (
        <div>
            <h3>Junkers</h3>
            <p>Junkers are the northern landed elite, powerful and unaccountable aristocrats who want to cling onto their strangehold of power. </p>
            <h4>Opinions</h4>
            <p>General ideology: <b>Reactionary</b></p>
            <p>Democracy vs aristocracy: <b>Strongly favour aristocracy</b></p>
            <p>Free trade vs protectionism: <b>Strongly protectionist</b></p>
            <p>Capitalism vs socialism: <b>Strongly capitalist</b></p>
            <p>Imperialism: <b>In favour</b></p>
            <p>Main rival: <b>Reichstag</b></p>
            <p>Friendly nations: <b>Austria</b> (shared hierarchical values and German identity)</p>
            <p>Hostile nations: <b>France</b> (Franco-Prussian war)</p>
        </div>
    )
}

function Reichstag() {
    return (
        <div>
            <h3>Reichstag</h3>
            <p>The Reichstag is the lower parliament of the Empire. They are elected by the people. They want unified Germany to be a modern, democratic nation.</p>
            <h4>Opinions</h4>
            <p>General ideology: <b>Liberal</b></p>
            <p>Democracy vs aristocracy: <b>Strongly favour democracy</b></p>
            <p>Free trade vs protectionism: <b>Strongly favour free trade</b></p>
            <p>Capitalism vs socialism: <b>Mixed</b></p>
            <p>Imperialism: <b>Generally opposed</b></p>
            <p>Main rival: <b>Junkers</b></p>
            <p>Friendly nations: <b>Britain</b> (shared democratic values)</p>
            <p>Hostile nations: <b>Austria</b> (aristocratic values)</p>
        </div>
    )
}

    function Industrialists() {
        return (
            <div>
                <h3>Industrialists</h3>
                <p>Industrialists are the non-landed elite. They own the nation's factories, making a continuous profit and waging cultural war against their workers.</p>
                <h4>Opinions</h4>
                <p>General ideology: <b>Libertarian</b></p>
                <p>Democracy vs aristocracy: <b>Generally favour democracy</b></p>
                <p>Free trade vs protectionism: <b>Strongly favour free trade</b></p>
                <p>Capitalism vs socialism: <b>Strongly capitalist</b></p>
                <p>Imperialism: <b>Strongly in favour</b></p>
                <p>Main rival: <b>Workers</b></p>
                <p>Friendly nations: <b>Britain</b> (capitalistic free-trade values)</p>
                <p>Hostile nations: <b>France</b> (revolutionary socialist values)</p>
            </div>
        )
    }

    function Workers() {
        return (
            <div>
                <h3>Workers</h3>
                <p>Workers represent the masses of all corners of Germany. In a modern, unified Germany they have pushed for greater rights in the factory and the ballot box.</p>
                <h4>Opinions</h4>
                <p>General ideology: <b>Populist</b></p>
                <p>Democracy vs aristocracy: <b>Strongly favour democracy</b></p>
                <p>Free trade vs protectionism: <b>Mixed</b></p>
                <p>Capitalism vs socialism: <b>Strongly socialist</b></p>
                <p>Imperialism: <b>Strongly opposed</b></p>
                <p>Main rival: <b>Industrialists</b></p>
                <p>Hostile nations: <b>France</b> (revolutionary socialist values)</p>
                <p>Friendly nations: <b>Britain</b> (capitalistic free-trade values)</p>

            </div>
        );
    }

    export default Protestants;
    export {Catholics};
    export {Junkers};
    export {Reichstag};
    export {Industrialists};
    export {Workers};