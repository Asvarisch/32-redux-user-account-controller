import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { changePasswordAction } from "../actions/changePasswordAction"
import ChangePassword from "../components/ChangePassword"

function mapStateToProps(state) {
    return {
        login: state.user.login
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        changePassword: changePasswordAction 
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)