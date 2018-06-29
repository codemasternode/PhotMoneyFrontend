import React from 'react'
import { Container } from 'mdbreact'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { customerActions } from '../store/actions'

const RegisterPage = (props) => (
    <div>Register</div>
)

function mapStateToProps({ register }) {
    return { register }
}

const register = reduxForm({
    form: 'register'
})(connect(mapStateToProps)(RegisterPage))

export { register as Register }