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
    console.log(input)
    const allPattern = [
        /^(3[0-1]?|[12]\d?|[4-9]) (januari|maret|mei|juli|agustus|oktober|desember) (202[0-2]|20[0-1][0-9]|1[0-9]{3}|[1-9]|[1-9]{1,2}[0-9])/gi,
        /^(30?|[12]\d?|[4-9]) (februari|april|juni|september|november) (202[0-2]|20[0-1][0-9]|[1-9]|[1-9]{1,2}[0-9])/gi   ,
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
        /^(3[0-1]?|[12]\d?|[4-9])\/(1|3|5|7|8|10|12)\/(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(30?|[12]\d?|[4-9])\/(2|4|6|9|11)\/(202[0-2]|20[0-1][0-9]|1[0-9]{3}|[0-9]{1,3})/gi,
        /^(3[0-1]|0[1-9]|1[0-9]|2[0-9])\/(0[1|3|5|7|8]|10|12)\/(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,
        /^(30|0[1-9]|1[0-9]|2[0-9])\/(0[2|4|6|9]|11)\/(202[0-2]|20[0-1][0-9]|1[0-9]{3}|000[1-9]|00[1-9][0-9]|0[1-9]{1,2}[0-9])/gi,

    ];

    for(let i = 0; i <= 15; i ++){
        if(input.match(allPattern[i]) != null){
            // console.log(i);
            return convertString(input.match(allPattern[i])[0], i);
        }
    }
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

function convertString(input, ind){
    const mapping = new Map([
        ['januari', '01'],
        ['februari', '02'],
        ['maret', '03'],
        ['april', '04'],
        ['mei', '05'],
        ['juni', '06'],
        ['juli', '07'],
        ['agustus', '08'],
        ['september', '09'],
        ['oktober', '10'],
        ['november', '11'],
        ['desember', '12'],
    ])
    // console.log(input);
    if(ind == 6 || ind == 7){
        const [d, m, y] = input.split(" ");
        return `${y}-${m}-${d}`;
    }else if(ind == 10 || ind == 11){
        const [d,m,y] = input.split("-");
        return `${y}-${m}-${d}`;
    }else if(ind == 14 || ind == 15){
        const [d,m,y] = input.split("/");
        return `${y}-${m}-${d}`;
    }else if(ind == 4 || ind == 5 ){
        const [d, m, y] = input.split(" ");
        return `${padTo4Digits(y)}-${padTo2Digits(m)}-${padTo2Digits(d)}`;
    }else if(ind == 8 || ind == 9){
        const [d,m,y] = input.split("-");
        return `${padTo4Digits(y)}-${padTo2Digits(m)}-${padTo2Digits(d)}`;
    }else if(ind == 12 || ind == 13){
        const [d,m,y] = input.split("/");
        return `${padTo4Digits(y)}-${padTo2Digits(m)}-${padTo2Digits(d)}`;
    }else if(ind == 0 || ind == 1){
        const [d, m, y] = input.split(" ");
        return `${padTo4Digits(y)}-${mapping.get(m.toLowerCase())}-${padTo2Digits(d)}`;
    }else if(ind == 2 || ind == 3){
        const [d, m, y] = input.split(" ");
        return `${y}-${mapping.get(m.toLowerCase())}-${d}`; 
    }
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

function padTo4Digits(num){
    return num.toString().padStart(4, '0');
}

module.exports = {
    dnaMatching,
    matchTanggal,
    matchPenyakit,
};