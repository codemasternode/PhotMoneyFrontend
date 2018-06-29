import axios from 'axios'
import { apiConstants } from '../consts'
import cloudinary from 'cloudinary'
import { customersConstants } from '../consts'

export const cloudinaryService = {
    upload
}

function upload(data) {
    return new Promise((resolve, reject) => {
        let error = false
        cloudinary.config(apiConstants)
        cloudinary.uploader.upload(data.file, (result) => {
            if (!result.url) {
                resolve(result.url)
            } else {
                reject('There is a problem with cloudinary')
            }
        })
    })


}