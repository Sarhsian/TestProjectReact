import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        //данные из стейта
        messagePage: state.messagePage,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {    
            dispatch(sendMessageCreator())
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
    ) (Dialogs);