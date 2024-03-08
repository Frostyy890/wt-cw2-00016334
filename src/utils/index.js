import fs from "fs";
//Generates random number which can be used as unique id
export const generateRandomId = () => {
  return Date.now();
};

//sends data to the database file
export const writeToFile = async (path, data) => {
  try {
    await fs.promises.writeFile(path, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(err);
    throw err;
  }
};
