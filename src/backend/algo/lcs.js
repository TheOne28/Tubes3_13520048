/**
 * Function untuk menghitung lcs dari string a dan b
 * @param {String} a  
 * @param {String} b 
 * @returns float yang menyatakan tingkat kemiripan
 */
module.exports = function lcs(a, b) {
    var aLength = a.length;
    var bLength = b.length;

    var dp = new Array(aLength + 1);

    for (let i = 0; i <= aLength + 1; i++) {
        dp[i] = new Array(bLength + 1);
    }

    for (let i = 0; i <= aLength; i++) {
        for(let j = 0; j <= bLength; j++){
            if(i == 0 || j == 0){
                dp[i][j] = 0;
            }else if(a[i - 1] == b[i-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i -1][j], dp[i][j-1]);
            }
        }
    }

    return (dp[aLength][bLength] / Math.min(aLength, bLength)) * 100;
}

