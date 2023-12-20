class numeri {
    constructor(arr = []) {
        this.arr = arr
    }

    checkNumbers(){
            if(arr){
                arr.array.forEach(element => {
                    if(element %3===0 && element %5===0){
                        console.log('paperino')
                    } else if(element %5===0){
                        console.log('pluto')
                    } else if(element %3===0){
                        console.log('pippo')
                    } else {
                        console.log(String(element));
                    }
                })
            }
        }
}


const arr = [1,2,3,4,5,6,7,8,9,10,15,21];
const numeri = new numeri(arr);
numeri.checkNumbers();

