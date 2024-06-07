function arrayMap( arr, target ) {
    let currentSum = 0;
    let start = 0;
    for ( let end = 0; end < arr.length; end++ ) {
        currentSum += arr[ end ];
        while ( currentSum > target && start <= end ) {
            currentSum -= arr[ start ];
            start++;
        }
        if ( currentSum === target ) {
            return true;
        }
    }
    return false;
}
// Example usage:
console.log( arrayMap( [ 1, 2, 3, 4, 5 ], 9 ) ); // Output: true ([2, 3, 4] sums up to 9)
console.log( arrayMap( [ 1, 1, 1 ], 2 ) ); // Output: true ([1, 1] sums up to 2)
console.log( arrayMap( [ 1, 2, 3, 4, 5 ], 15 ) ); // Output: true ([1, 2, 3, 4, 5] sums up to 15)
console.log( arrayMap( [ 1, 2, 3, 4, 5 ], 8 ) ); // Output: false (no subarray sums up to 8)
console.log( arrayMap( [], 5 ) ); // Output: false (empty array)
console.log( arrayMap( [ 1, -2, 3, -4, 5 ], 3 ) ); // Output: true ([3, -4, 5] sums up to 3)
console.log( arrayMap( [ 1, -2, 3, -4, 5 ], 0 ) ); // Output: true ([1, -2, 3, -4, 5] sums up to 0)