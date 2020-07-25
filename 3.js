
function attack(mySoldiers, hpB, attackB, numB) {
    let sum = 1
    while (true) {
        if (mySoldiers >= 0) {
            enemyLeft = (hpB * numB) - mySoldiers
            loose = attackB * (Math.ceil(enemyLeft / 2))
            mySoldiers = mySoldiers - loose
            numB = (enemyLeft / 2)
            sum++
            if (numB === 0 && mySoldiers>=0) {
                return sum
            } else if (numB>0 && mySoldiers<=0){
                sum = -1
                return sum
            }

        }
        return (sum)
    }

}

console.log(attack(2, 1, 1, 3));
