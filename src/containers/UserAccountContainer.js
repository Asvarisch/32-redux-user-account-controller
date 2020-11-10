import { connect } from 'react-redux'
import UserAccount from '../components/UserAccount'

function mapStateToProps(state) {
    return {
        firstName: state.user.firstName,
        lastName: state.user.lastName
    }
}

export default connect(mapStateToProps)(UserAccount)