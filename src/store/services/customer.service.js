import axios from 'axios'
import { cloudinaryService } from './cloudinary.service'
import { apiConstants } from '../consts'

export const customerService = {
    register
}

function register(data) {
    return new Promise((resolve, reject) => {
        cloudinaryService.upload(data)
            .then((image) => {
                data.avatar = image
                axios.post(apiConstants.api_root + 'api/Customers', data)
                    .then((res) => {
                        resolve(res)
                    }).catch((e) => {
                        reject()
                    })
            }).catch((e) => {
                reject(e)
            })
    })
}