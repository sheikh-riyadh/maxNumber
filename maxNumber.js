/* Finding max number between jin and dela */

const jim = 84;
const dela = 75;
const chinku = 99;

function getMax1(jim, dela) {
    if (jim > dela) {
        return jim;
    }
    else {
        return dela;
    }
}

const result1 = getMax1(jim, dela)
console.log(result1)


/* finding max number between jim dela and chinku */

function getMax2(jim, dela, chinku) {
    if (jim > dela && jim > chinku) {
        return jim;
    }
    else if (dela > jim && dela > chinku) {
        return dela;
    }
    else {
        return chinku;
    }
}

const result2 = getMax2(jim, dela, chinku);
console.log(result2);

