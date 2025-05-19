

const removeSpaces = require ('../src/operations').removeSpaces
const concat = require ('../src/operations').concat
const capitals = require ('../src/operations').capitals



test ( 'Ciao come stai, tutto bene?', () => {

    expect( removeSpaces("Ciao come stai, tutto bene?") ).toBe("Ciaocomestai,tuttobene?" );

} );


test ( 'Concatenzione string', () => {

    expect( concat("Ciao come stai, tutto bene? ", "Tutto bene grazie, te?") ).toBe( "Ciao come stai, tutto bene? Tutto bene grazie, te?" );

} );

test ( 'Ciao come stai, tutto bene?', () => {

    expect( concat("Ciao come stai, tutto bene? ", "Tutto bene grazie, te?") ).toBe( "Ciao come stai, tutto bene? Tutto bene grazie, te?" );

} );


test ( 'Ciao come stai, tutto bene?', () => {
    expect( capitals("Ciao come stai, tutto bene?") ).toBe("CIAO COME STAI, TUTTO BENE?" );

}
);
