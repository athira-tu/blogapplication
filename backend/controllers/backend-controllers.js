const usermodel = require("../models/backend-models")
const blogmodel = require("../models/blogmodel")
const bcrypt = require('bcrypt');
const signup = async (req, res) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        let data = await usermodel.create(req.body)
        res.json({
            success: true,
            message: "success"
        })
        console.log(req.body);

    }
    catch (error) {
        res.json({
            success: false,
            message: "cannot able to signup"
        })

    }

}

const login = async (req, res) => {
    try {
        let check = await usermodel.findOne({ email: req.body.email })
        if (check) {
            let existUser = await bcrypt.compare(req.body.password, check.password)
            if (existUser) {
                res.json({
                    success: true,
                    message: "succesfull",
                    user: check

                })

            } else {
                res.json({
                    success: false,
                    message: "unsuccessfull-password error"
                })
            }

        }
        else {
            res.json({
                success: false,
                message: "unsuccessfull-emal error"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull"
        })
    }
}

const addblog = async (req, res) => {
    try {
        let data = await blogmodel.create(req.body)
        console.log(req.body);
        res.json({
            success: true,
            message: "blog added succesfully",
            // addtask
        })
    }
    catch (error) {
        console.log(req.body);
        res.json({
            success: false,
            message: "unsuccesfull",

        })
        console.log(error);

    }
}
const getAllblog = async (req, res) => {
    try {
        let allblog = await blogmodel.find()
        res.json({
            success: true,
            message: "got all task",
            allblog
        })
    } catch (error) {
        res.json({
            success: false,
            message: "didnt get all task"
        })
    }
}
const getauthorblogs = async (req, res) => {
    try {
        let blogs = await blogmodel.find({ authorid: req.params.id })
        res.json({
            success: true,
            message: "succesfull",
            blogs
        })
    } catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull"
        })
    }
}
const deleteblog = async (req, res) => {
    try {
        let deltask = await taskmodel.findOneAndDelete({ _id: req.params.id })
        res.json({
            success: true,
            message: "deleted succesfully"
        })
    }
    catch (error) {
        res.json({
            success: false,
            message: " unsuccesfull"
        })
    }
}


module.exports = { signup, login, addblog, getAllblog, getauthorblogs, deleteblog }