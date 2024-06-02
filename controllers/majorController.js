const {Majors} = require ("../models")
const ApiError = require ("../utils/apiError")

const getAllMajors = async (req, res, next) => {
    try {
        const allMajors = await Majors.findAll();

        res.status(200).json({
            status: "Success",
            message: "All Majors successfully retrieved",
            requestAt: req.requestTime,
            data: {allMajors},
        });

    }catch (err) {
        return next (new ApiError(err.message, 400))
    }
};

const createMajor = async (req, res, next) => {
    const {name, description} = req.body;
    try {
        const data = {
            name,
            description,
        }
        console.log(data);
        const newMajor = await Majors.create(data);

        res.status(201).json({
            status: "Success",
            message: "Major successfully created",
            data: { newMajor },
        })
    }catch (err) {
        return next (new ApiError(err.message, 400))
    }

};
module.exports = {
    getAllMajors,
    createMajor,
}
