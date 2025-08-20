const shuffleArray = (array) => {
  let arr = [...array]; 
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const randomSelect = (array) => {
  if (!array || array.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export default {shuffleArray, randomSelect}