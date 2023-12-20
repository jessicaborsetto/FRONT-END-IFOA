class numeri {
    constructor(arr = []) {
        this.arr = arr
    }

    checkNumbers(){
                this.arr.forEach(element => {
                    if(element %3===0 && element %5===0){
                        console.log('paperino')
                    } else if(element %5===0){
                        console.log('pluto')
                    } else if(element %3===0){
                        console.log('pippo')
                    } else {
                        console.log(element.toString());
                    }
                })
            } 
}



const arr = [1,2,3,4,5,6,7,8,9,10,15,21];
const test = new numeri(arr);
test.checkNumbers();

