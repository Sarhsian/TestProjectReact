import React from 'react';
import Content from './Content';
import { connect } from 'react-redux';
import { getUserProfile } from "../../redux/content-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ContentContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    } 
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <div>
        <Content {...this.props} profile={this.props.profile} />
      </div>
    )

  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
) (ContentContainer)


