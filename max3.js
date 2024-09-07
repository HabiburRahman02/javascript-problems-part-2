
const rahim = 1356;
const karim = 668;
const nahid = 445;

// if(rahim> karim && rahim > nahid){
//     console.log('rahim get heighest mark')
// }
// else if(karim > rahim && karim > nahid){
//     console.log('karim beshi paise');
// }
// else{
//     console.log('nahid besi paise')
// }


function getMaxIn3(rahim, karim, nahid) {
    if (rahim > karim && rahim > nahid) {
        return rahim
    }
    else if (karim > rahim && karim > nahid) {
        return karim
    }
    else {
        return nahid
    }
}

const max3 = getMaxIn3(rahim, karim, nahid);
console.log('max number is:', max3)