import postMessage from "../model/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const posts = await postMessage.find({});

        res.status(200).json({
            message: "success",
            data: posts
        })
    }catch(error){
        res.status(400).json({
            message: "Error, SomeThing went wrong!!",
            error: error.message,
            code: 400,
            errorCode: error.code
        })
    }
}

export const createPost = async (req , res) => {
    const post = req.body;

    const newPost = new postMessage(post);

    try{
        const result = newPost.save();
        res.status(201).json({
            message: "success",
            code: 201,
            result
        });
    }catch(error){
        res.status(400).json({
            message: "Error, SomeThing went wrong!!",
            error: error.message,
            code: 400,
            errorCode: error.code
        })
    }

}