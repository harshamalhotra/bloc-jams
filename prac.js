function findOdd(A) {
  var a=[];
  var b=[];
  var prev;

  A.sort();

    for ( var i = 0; i < A.length; i++ ) {
        if ( A[i] !== prev ) {
            a.push(A[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = A[i];
    }

  return [a,b];
}