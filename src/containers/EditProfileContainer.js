import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editProfileAction } from '../actions/editProfileAction'
import EditProfile from '../components/EditProfile'

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editProfile: editProfileAction 
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(EditProfile)