function  removeSpaces(  a ) {

    return a.replace(/\s+/g, '');
}

function concat (  a, b ) {

    return a+b;
    
}

function capitals ( a ) {
    return a.toUpperCase();
}



module.exports = { removeSpaces,concat, capitals };
