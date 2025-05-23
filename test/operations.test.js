

const removeSpaces = require ('../src/operations').removeSpaces
const concat = require ('../src/operations').concat
const capitals = require ('../src/operations').capitals
const toLowerCase = require ('../src/operations').toLowerCase



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

test ( 'Ciao come stai, tutto bene?', () => {
    expect( toLowerCase("Ciao COME Stai, Tutto bEnE?") ).toBe("ciao come stai, tutto bene?" );

});
