const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ]
  }
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    const firstArray = data.lists[0][1];
    const secondArray = data.lists[1][1];
    const thirdArray = data.lists[2][1];
  
    const firstLastValue = firstArray[firstArray.length - 1];
    const secondLastValue = secondArray[secondArray.length - 1];
    const thirdLastValue = thirdArray[thirdArray.length - 1];
  
    if (firstLastValue >= secondLastValue && firstLastValue >= thirdLastValue) {
      data.lists[0][1].pop(); 
      return firstLastValue;
    }
  
    if (secondLastValue >= firstLastValue && secondLastValue >= thirdLastValue) {
      data.lists[1][1].pop(); 
      return secondLastValue;
    }
  
    data.lists[2][1].pop();
    return thirdLastValue;
  }
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);