const usermodel = require("../models/backend-models")
const blogmodel = require("../models/blogmodel")
const authormodel = require("../models/authormodel")
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
            message: " khsdlmunsuccesfull"
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
    let delblog = await blogmodel.findOneAndDelete({ _id: req.params.id })
    try {
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
const editBlog = async (req, res) => {
    let newblog = await blogmodel.findOneAndUpdate({ _id: req.params.id }, req.body)
    try {
        res.json({
            success: true,
            message: "edited succesfully"
        })
    }
    catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull edit"
        })
    }
}
const setblog = async (req, res) => {
    let set = await blogmodel.find({ category: req.params.category })
    try {
        res.json({
            success: true,
            message: "succesfull",
            set
        })
        console.log(set)
    }
    catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull sort"
        })
        console.log(error);
    }
}
const getoneblog = async (req, res) => {

    try {
        let blog = await blogmodel.findOne({ _id: req.params.id })
        res.json({
            success: true,
            message: "succesfull",
            blog
        })
        console.log(blog);
    } catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull",

        })
        console.log(error);
    }
}
const postcomment = async (req, res) => {
    try {
        let comment = await authormodel.create(req.body)
        res.json({
            success: true,
            message: "comment posted succesfully"


        })
    } catch (error) {
        res.json({
            succes: false,
            message: "unsuccesful"
        })
    }

}

const blogcomment = async (req, res) => {
    try {
        let blogcomment = await authormodel.find({ blogid: req.params.id })
        res.json({
            success: true,
            message: "succesfull",
            blogcomment

        })
    } catch (error) {
        res.json({
            success: false,
            message: "unsuccesfull"
        })
        console.log(error);
    }
}
const authorblogs = async (req, res) => {
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




module.exports = { signup, login, addblog, getAllblog, getauthorblogs, deleteblog, editBlog, setblog, getoneblog, postcomment, blogcomment, authorblogs }