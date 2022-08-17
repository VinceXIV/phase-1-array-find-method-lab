// code your solution here
function superbowlWin (arrayOfObjects){
    const result = arrayOfObjects.find(item =>{
        if(item.result === "W"){
            return true;
        }
    })

    if(result){
        return result.year;
    }
}

// const record = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]

// console.log(superBowlWin(record))