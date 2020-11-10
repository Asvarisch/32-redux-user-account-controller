import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { registerUserAction } from '../actions/registerAction'
import Registration from '../components/Registration'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        registerUser: registerUserAction 
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Registration)
