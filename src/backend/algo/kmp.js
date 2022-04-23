function computeFail(pattern) {
    var m = pattern.length;
    var fail = [];
    var j = 0;
    var i = 1;
    fail[0] = 0;
    while (i < m) {
        if (pattern[j] == pattern[i]) {
            fail[i] = j + 1;
            i++;
            j++;
        }
        else if (j > 0) {
            j = fail[j - 1];
        }
        else {
            fail[i] = 0;
            i++;
        }
    }
    return fail;
}

module.exports = function kmp(text, pattern) {
    var n = text.length;
    var m = pattern.length;
    var i = 0;
    var j = 0;
    var fail = computeFail(pattern);
    while (i < n) {
        if (pattern[j] == text[i]) {
            if (j == m - 1) {
                return i - m + 1;
            }
            i++;
            j++;
        }
        else if (j > 0) {
            j = fail[j - 1];
        }
        else {
            i++;
        }
    }
    return -1;
}
