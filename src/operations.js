function  removeSpaces(  a ) {

    return a.replace(/\s+/g, '');
}

function concat (  a, b ) {

    return a+b;
    
}

function capitals ( a ) {
    return a.toUpperCase();
}

function toLowerCase ( a ) {
    return a.toLowerCase();
}


module.exports = { removeSpaces,concat, capitals, toLowerCase };
