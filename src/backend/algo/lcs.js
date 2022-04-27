function lcs(a, b) {
    var c = [];
    for (var i = 0; i <= a.length; i++) {
        c[i] = [];
        c[i][0] = 0;
    }
    for (var j = 0; j <= b.length; j++) {
        c[0][j] = 0;
    }
    for (i = 1; i <= a.length; i++) {
        for (j = 1; j <= b.length; j++) {
        if (a.charAt(i - 1) == b.charAt(j - 1)) {
            c[i][j] = c[i - 1][j - 1] + 1;
        } else {
            c[i][j] = Math.max(c[i - 1][j], c[i][j - 1]);
        }
        }
    }
    return c;
    // return (c[c.length-1][c[0].length-1]/Math.min(a.length,b.length))*100;    // returns in percentage (without '%')
}

console.log(lcs('ACC', 'ACGTACGACTAGCACGTACGACTAGCACGTACGACTAGCACGTACGACTAGCACGTACGACTAGCACGTACGACTAGC'))