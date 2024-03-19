const {generateSignedUrl,getRequestForSignedUrl} = require("../s3")

const getSignedUrl = async (req,res)=>{

    // console.log(100)
    const image = req.query.imageName

    // console.log(req.query)

    // console.log("Fuck",image)

    const url = await generateSignedUrl(image);

    return res.status(200).json({ url })
}

const finalRequestToAWS = async (req,res)=>{
    const image = req.query.imageName

    // console.log(req.body)

    // console.log("Fuck",image)
    const url = await getRequestForSignedUrl(image)
    return res.status(200).json({url})
}

module.exports = {getSignedUrl,finalRequestToAWS};