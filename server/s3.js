const {S3Client, GetObjectCommand, PutObjectCommand} = require('@aws-sdk/client-s3')
const {getSignedUrl} = require ('@aws-sdk/s3-request-presigner')

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId:process.env.AWS_ACCESSKEYID,
        secretAccessKey:process.env.AWS_SECRETACCESSKEY
    }
})

async function getObjectURL(key)
{
    const command = new GetObjectCommand({
        Bucket: 'file-sharing-app-sharesync',
        Key: key,
    })

    const url = await getSignedUrl(s3Client,command)

    return url;
}

async function putObject(filename, contentType)
{
    const command = new PutObjectCommand({
        Bucket: 'file-sharing-app-sharesync',
        Key: `uploads/user-uploads/${filename}`,
        ContentType: contentType
    })

    const url = await getSignedUrl(s3Client, command)

    return url;
}

// async function init()
// {
//     console.log('URL for image', await getObjectURL('uploads/user-uploads/video-1710512505948.mp4'))

//     // console.log('URL for uploading', await putObject(`video-${Date.now()}.mp4`,'video/mp4'))
// }

// init()

const generateSignedUrl = async (image) => {
    const signedUrl = await putObject(image,'image/jpeg')
    // console.log(signedUrl)
    return signedUrl;
}

const getRequestForSignedUrl = async (image)=>{
    const value = `uploads/user-uploads/${image}`
    const finalUrlToViewFile = await getObjectURL(value)
    
    return finalUrlToViewFile;
}

module.exports = {generateSignedUrl,getRequestForSignedUrl}