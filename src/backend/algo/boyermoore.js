function buildLast(pattern) {
    var m = pattern.length;
    var last = {
        A: -1,
        C: -1,
        G: -1,
        T: -1
    };

    for (var i = 0; i < m; i++) {
        last[pattern[i]] = i;
    }
    return last;
}

module.exports = function bm(text,pattern) {
    var n = text.length;
    var m = pattern.length;
    var i =  m-1;
    var j = m-1;
    var last = buildLast(pattern);

    if (i > n-1) {
        return -1;
    }
    do {
        if (pattern[j] == text[i]) {
            if (j == 0) {
                return i;
            }
            i--;
            j--;
        }
        else {
            i += i + m - Math.min(j,1+last[text[i]]);
            j = m-1;
        }
    } while (i <= n-1);
    return -1;
}
