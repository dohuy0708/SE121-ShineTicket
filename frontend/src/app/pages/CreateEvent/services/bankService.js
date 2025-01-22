// bankService.js
const getBanks = async () => {
  const response = await fetch("https://api.vietqr.io/v2/banks");
  const data = await response.json();
  return data;
};

export default getBanks;
