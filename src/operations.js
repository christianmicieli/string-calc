function  removeSpaces(  a ) {

    return a.replace(/\s+/g, '');
}

function concat (  a, b ) {

    return a+b;
    
}



module.exports = { removeSpaces,concat };
