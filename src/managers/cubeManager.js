const uniqid = require('uniqid');
const cubes = [];

exports.getAll = () => cubes.slice() //copy of array with a new reference

//cubeData = name, description, imageUrl, difficultyLevel
exports.create = (cubeData) => {
    const newCube = {
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;
};  