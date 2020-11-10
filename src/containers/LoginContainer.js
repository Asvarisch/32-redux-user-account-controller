import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUserAction } from '../actions/loginAction'
import Login from '../components/Login'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginUser: loginUserAction 
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)