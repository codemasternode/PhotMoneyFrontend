import axios from 'axios'
import { cloudinaryService } from './cloudinary.service'
import { apiConstants } from '../consts'

export const customerService = {
    register
}

function register(data) {

    return cloudinaryService.upload((image) => {
        data.avatar = image
        axios.post(apiConstants.api_root + '/api/Customers',data)
    })
}