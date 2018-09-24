export const create2dArray = (lines, columns, value) => {
  const array = [];
  value = JSON.stringify(value);


  for(let i = 0; i < lines; i++){
    let line = [];
    for(let j = 0; j < columns; j++)
      line.push(JSON.parse(value));
    array.push(line);
  }

  return array;
};

export const isValid = (value) => {
  if(value === '') return true;
  if(isNaN(value) || value < 1 || value > 9) return false;
  return true;
};

