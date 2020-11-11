import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loginUserAction } from '../actions/loginAction'
import Login from '../components/Login'


function mapStateToProps(state) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginUser: loginUserAction 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)