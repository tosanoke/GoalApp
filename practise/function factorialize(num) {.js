function factorialize(num) {
    let result;
    for(let x = 1; x < num; x++){
        result = num * (num - x);
        //num = num - 1;
        console.log(result)

    }
    //return num;
  }
  
  factorialize(5);