function stringTransform ( input ) {

    const length = input.length;
    if ( length % 3 === 0 && length % 5 === 0 ) {
        input = input.split( '' ).reverse().join( '' );
        return input.split( '' ).map( char => char.charCodeAt( 0 ) ).join( ' ' );
    }
    if ( length % 3 === 0 ) {
        return input.split( '' ).reverse().join( '' );
    }
    if ( length % 5 === 0 ) {
        return input.split( '' ).map( char => char.charCodeAt( 0 ) ).join( ' ' );
    }
    return input;
}
// Example usage:
console.log( stringTransform( "Hello" ) ); // String Length: 5 -> Expected output: "72 101 108 108 111" 
console.log( stringTransform( "World!" ) ); // String Length: 6 -> Expected output: "!dlroW"
console.log( stringTransform( "HelloJavaScript" ) ); // String Length: 15 -> Expected output: "116 112 105 114 99 83 97 118 97 74 111 108 108 101 72"
console.log( stringTransform( "Hello World" ) ); // String Length: 11 -> Expected output: "Hello World"
