
function woodQuantity(chair, table, bed) {
    const perChairWood = 5;
    const perTableWood = 10;
    const perBedWood = 40;

    const totalChairWood = chair * perChairWood;
    const totalTableWood = table * perTableWood;
    const totalBedWood = bed * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood
}

const totalWood = woodQuantity(2, 1, 2);
console.log(totalWood);