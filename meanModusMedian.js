function mean(number) {
    let total = 0;
    for(let i = 0; i < number.length; i++) {
        total += number[i];
    }
    return total / number.length;    
}


function mode(numbers) {
 
    var modes = [],
        count = [],
        number,
        maxIndex = 0;
    for (let i = 0; i < numbers.length; i += 1) {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }
    for (i in count) if (count.hasOwnProperty(i)) {
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    }
    return modes;
  }


function median(numbers) {
    let median = 0;
    numbers.sort();
    if(numbers.length % 2 === 0) {
        median = (numbers[numbers.length / 2 - 1]) / 2;
    } else {
        median = numbers[(numbers.length - 1) / 2];
    }
    return median;
}

let data = [1,4,3,6,7,3,7,9,1];

console.log(mean(data));
console.log(mode(data));
console.log(median(data));


