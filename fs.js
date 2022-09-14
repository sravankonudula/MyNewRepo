const fs = require("fs/promises");
const createFile = async(filename, data) => {
    try{
        await fs.writeFile(filename, data);
        console.log("file was successfully created!!!");
    }
    catch(error){
        console.log(error);
    }
};

createFile("f1.txt", "welcome to my first node js code");

//Read file
const readfile = async(Filetoread) => {
    try{
        const data = await fs.readFile(Filetoread);
        console.log(data.toString());
    }
    catch(error){
        console.log(error);
    }
};