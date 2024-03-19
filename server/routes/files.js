const express = require('express')

const router = express.Router()

const path = require('path')

const {getSignedUrl,finalRequestToAWS} = require("../controller/imageStorageS3")

router.get('/image-url',getSignedUrl)
router.get('/s3Bucket',finalRequestToAWS)

module.exports = router;