import { customerService } from '../services'
import { customersConstants } from '../consts'

export const customerActions = {
    register
}

function register(data) {

    function success(data) {
        return {
            type: customersConstants.REGISTER_USER_SUCCESS,
            data
        }
    }

    function failure(error) {
        return {
            type: customersConstants.REGISTER_USER_FAILURE,
            error
        }
    }

    return dispatch => {
        customerService.register(data)
            .then((res) => {
                dispatch(success(res))
            }).catch((e) => {
                dispatch(e)
            })
    }



}