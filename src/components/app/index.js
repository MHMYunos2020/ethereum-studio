import { connect } from 'react-redux';
import { appActions } from '../../actions';
import { getShowAnalyticsTrackingDialog } from '../../selectors/settings';
import { getAppVersion } from '../../selectors/app';
import App from './App';

const mapStateToProps = state => ({
    showTrackingAnalyticsDialog: getShowAnalyticsTrackingDialog(state),
    appVersion: getAppVersion(state),
});

const mapDispatchToProps = dispatch => {
    return {
        notifyAppStart: () => {
            dispatch(appActions.notifyAppStart());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
