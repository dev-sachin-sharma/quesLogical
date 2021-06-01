function checkRepeat(num){

    for (let i = 0; i<num.length; i++) {
     for(let j = i+1; j<num.length; j++) {
          if(num[i] == num[j]) return num[i]
        }
      }
}

const result = checkRepeat([1,2,2,3,4,5,6,7])
console.log(result);