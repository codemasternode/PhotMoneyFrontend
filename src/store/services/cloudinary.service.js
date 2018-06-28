import axios from 'axios'
import { apiConstants } from '../consts'
import cloudinary from 'cloudinary'

export const cloudinaryService = {
    upload,
    fetchByUser
}

function upload(callback, dispatch, data) {
    cloudinary.config(apiConstants)
    cloudinary.uploader.upload(file, (result) => {
        if (result.url) {
            callback(result.url)
        }
    })
}