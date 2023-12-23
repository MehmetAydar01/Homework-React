import getData from './myModule.js';

const myFunc = async () => {
  const getAllData = await getData(1);
  console.log(getAllData);
};

myFunc();
