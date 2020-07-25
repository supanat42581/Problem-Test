let sum = 0
let time = 0

function buyFood(openAt, closeAt, walkTime) {

    for (let i = 0; i < (openAt.length); i++) {
        if (time < openAt[i] || time > closeAt[i]) {
            time += walkTime
        } else if (time >= openAt[i] && time <= closeAt[i]) {
            sum += 1
            time += walkTime
        } else { }
    }
        if(sum==0){
            sum+=1
        }
        console.log(sum)
    }
    
buyFood([99999,2,4], [1000000,22,44], 15);








