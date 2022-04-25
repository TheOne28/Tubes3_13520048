/**
 * Fungsi untuk mengecek apakah dna melanggar constraint
 * @param {String} dna dna untuk dicek
 * @returns {Boolean} boolean yang mengecek apakah dna melanggar constraint
 */
function dnaMatching(dna){
    const pattern = /[^ACGT]/;
    
    var succedd = pattern.test(dna);
    return succedd;
}
/**
 * 
 * @param {String} input input berupa masukan query yang ingin dicek
 * @returns array berisi tanggal yang sesuai
 */
function matchTanggal(input){
    /**
     * Format Tanggal yang diterima
     *  1. dd Month yyyy, month dalam huruf, dd dan yyyy tidak ada awalan 0, yyyy dibatasi 2022
     *  2. dd Month yyyy, month dalam huruf, dd dan yyyy dengan awalan 0, yyyy dibatasi 2022 dan tidak ada tahun 0000
     *  3. dd mm yyyy, dd, mm, dan yyyy tidak ada awalan 0
     *  4. dd mm yyyy, dd, mm, dan yyyy dengan awalan 0
     *  5. dd-mm-yyyy, dd, mm, dan yyyy tidak ada awalan 0
     *  6. dd-mm-yyyy, dd, mm, dan yyyy dengan awalan 0
     *  7. dd/mm/yyyy, dd, mm, dan yyyy tidak ada awalan 0
     *  8. dd/mm/yyyy, dd, mm, dan, yyyy dengan awalan 0
     */
    const allPattern = [
        /^(3[0-1]?|[12]\d?|[4-9]) (januari|maret|mei|juli|agustus|oktober|desember) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|[1-9]|[1-9]{1,2}[0-9])/gi,
        /^(30?|[12]\d?|[4-9]) (februari|april|juni|september|november) (202[0-2]|20[0-1][0-9]|[1-9]|[1-9]{1,2}[0-9])/gi,
        /^(3[0-1]|0[1-9]|1[0-9]|2[0-9]) (januari|maret|mei|juli|agustus|oktober|desember) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(30|0[1-9]|1[0-9]|2[0-9]) (februari|april|juni|september|november) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(3[0-1]?|[12]\d?|[4-9]) (1|3|5|7|8|10|12) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(30?|[12]\d?|[4-9]) (2|4|6|9|11) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(3[0-1]|0[1-9]|1[0-9]|2[0-9]) (0[1|3|5|7|8]|10|12) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(30|0[1-9]|1[0-9]|2[0-9]) (0[2|4|6|9]|11) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(3[0-1]?|[12]\d?|[4-9])-(1|3|5|7|8|10|12)-(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(30?|[12]\d?|[4-9])-(2|4|6|9|11)-(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(3[0-1]|0[1-9]|1[0-9]|2[0-9])-(0[1|3|5|7|8]|10|12)-(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(30|0[1-9]|1[0-9]|2[0-9])-(0[2|4|6|9]|11)-(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(3[0-1]?|[12]\d?|[4-9])\\(1|3|5|7|8|10|12)\\(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(30?|[12]\d?|[4-9])\\(2|4|6|9|11)\\(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(3[0-1]|0[1-9]|1[0-9]|2[0-9])\\(0[1|3|5|7|8]|10|12)\\(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(30|0[1-9]|1[0-9]|2[0-9])\\(0[2|4|6|9]|11)\\(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,

    ];

    allPattern.forEach(pattern => {
        const matchResult = input.match(pattern);
        if(matchResult !== null){
            return matchResult;
        }
    });

    return null;
}
/**
 * 
 * @param {String} input input berupa masukan query yang ingin dicek
 * @returns array berisi nama penyakit yang sesuai
 */
function matchPenyakit(input){
    const pattern = /[a-z ]+$/gi;

    return input.match(pattern);
}
module.exports = {
    dnaMatching,
    matchTanggal,
    matchPenyakit,
};