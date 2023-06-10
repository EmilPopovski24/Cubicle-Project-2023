const uniqid = require('uniqid');
const Cube = require('../models/Cube');

// exports.getAll = () => cubes.slice() //copy of array with a new reference
//Search logic
exports.getAll = async (search, from, to) => {
    let result = await Cube.find().lean();

    //TODO: use mongoose filter in the db
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
}

exports.getOne = (cubeId) => Cube.findById(cubeId);
//cubeData = name, description, imageUrl, difficultyLevel
exports.create = (cubeData) => {
    const cube = new Cube(cubeData);

    return cube.save();
};  

exports.attachAccessory = async(cubeId, accessoryId) => {
    // return Cube.findByIdAndUpdate(cubeId, { $push: {accessories : accessoryId}});

    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId);
    return cube.save();
}