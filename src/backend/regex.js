
function dnaMatching(dna){
    const pattern = /[^ACGT]/;
    return pattern.test(dna);
}


module.exports = dnaMatching;