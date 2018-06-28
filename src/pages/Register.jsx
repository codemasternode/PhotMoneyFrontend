import React from 'react'
import { Container } from 'mdbreact'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const Register = (props) => (
    <div>Register</div>
)

export default reduxForm({
    form: 'register'
})(connect(mapStateToProps,)(Register))