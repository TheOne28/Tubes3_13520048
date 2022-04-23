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


module.exports = dnaMatching;