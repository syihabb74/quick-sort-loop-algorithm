function quickSortLoop (arr) {

    if ( arr.length < 2 ) {
        return arr;
    }
    const pivot = arr[arr.length - 1];
    const leftSide = [];
    const rightSide = [];
    console.log(pivot)
    for ( let i = 0 ; i < arr.length - 1 ; i++ ) {
        if ( arr[i] < pivot ) {
            leftSide.push(arr[i]);
        } else {
            rightSide.push(arr[i]);
        }
    }
    return [...quickSortLoop(leftSide), pivot, ...quickSortLoop(rightSide)];
}

// test-case
console.log(quickSortLoop([4,2,1,3,10,20,5]));

/*  TRACING 

SMALL EXAMPLE


LOOP INITIAL WHEN QUICKSORTLOOP IS RUNNING

[4,2,1,3,10,20,5] => PIVOT = ARR[LENGTH - 1] ==> 5

i = 0; 
4 < 5 
true
left.push(arr[i]) => left = [4];
i++
i = 1 
2 < 5 
true
left.push(arr[i]) => left = [4,2]
i++
i = 2 
1 < 5 
true
left.push(arr[i]) => left = [4,2,1]
i++ 
i = 3
3 < 5 
true
left.push(arr[i]) => left = [4,2,1,3]
i++ 
i = 4
10 < 5 
false
right.push(arr[i]) => right = [10]
i++ 
i = 5
20 < 5 
false
right.push(arr[i]) => right = [10,20]

OUT LOOP

return [...quickSortLoop(leftSide), pivot, ...quickSortLoop(rightSide)];
return [...quickSortLoop([4,2,1,3])], 5 , quickSortLoop([10,20])

and so on so on till every argument array have 1 value inside


*/