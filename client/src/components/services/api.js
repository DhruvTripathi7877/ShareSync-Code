import axios from "axios"
const API_URL = "https://share-sync-code.vercel.app"

const headers = {
    "Content-Type": "image/jpeg"
}

const getRequestToS3Bucket = async(data)=>{
    try{
        // console.log(data)
        const response = await axios.get(`${API_URL}/api/files/s3Bucket`,{params :{imageName:data.imageName}})

        // console.log(response.data);

        return response.data
    }
    catch (error)
    {
        console.log('Error while calling the api ',error.message);

        return error.response.data;
    }
}

export const getSignedUrl = async(data)=>{

    try {
    // console.log(imageName)
    // console.log(data)
    const response = await axios.get(`${API_URL}/api/files/image-url`,{params :{imageName:data.imageName}})

    return response.data;
    }
    catch (error)
    {
        console.log('Error while calling the api ',error.message);

        return error;
    }
}

export const uploadFile = async (url, file, data) => {
    try {

        async function generatePresignedUrl()
        {
            await axios.put(url, file, { headers: headers });
        }
        const value = await generatePresignedUrl().then(async()=>{
            // console.log(1000)
            const response = await getRequestToS3Bucket(data);

            return response.url;
        })
        .catch((err) => {
            console.error('Error:', err);
        });

        return value
    } catch (error) {
        console.log('Error while calling the API ', error.message);
        return error.response.data;
    }
}
