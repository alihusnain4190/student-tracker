exports.formatBlockArr = (array) => {
  const blockCountObj = {};
  array.forEach((block) => {
    console.log(block);
    if (blockCountObj.hasOwnProperty(block.name)) {
      blockCountObj[block.name]++;
    } else {
      blockCountObj[block.name] = 1;
    }
  });
  const blockObjKeys = Object.keys(blockCountObj);
  const resultArr = blockObjKeys.map((block) => {
    return `${block}: ${blockCountObj[block]}`;
  });
  return resultArr;
};
