
import React, {Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderView from '../Components/Header';
import AllTask from '../Components/AllTask';
import Styles from '../Styles/Styles';
import Loader from '../Components/Loader';

import { getTasks } from '../Model/HelperApi/HelperApi';
import { setTaskAction } from '../Model/ReduxModel/Actions/AllTaskActions';

class HomeController extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalVisible: false,
        }
    }

    componentWillMount() {

        this.setState({ isModalVisible: true });

        getTasks(jsonResponse=> {

            console.log('response ++++++++ ');
            console.log(jsonResponse);

            this.props.setTaskAction(jsonResponse);
            this.setState({ isModalVisible: false });
        }).then();
    }

    render() {
        return(
            <View style = {{flex: 1}}>
                <HeaderView
                    headerTitle = "Task List"
                    style = {{height: 40}} />
                <ScrollableTabView
                    tabBarUnderlineColor = 'rgba(181 ,34, 50, 1.0)'
                    tabBarBackgroundColor = 'rgba(49, 64, 107, 1.0)'
                    tabBarActiveTextColor = '#cfcfcf'
                    tabBarInactiveTextColor = '#cfcfcf'
                    tabBarTextStyle = {{fontFamily: 'Roboto', fontSize: 13}}
                    style = {{flex: 1}} >
                    <AllTask tabLabel="ALL" />
                    <Text tabLabel='OVERDUE' />
                    <Text tabLabel='CLOSED' />
                    <Text tabLabel='NEW' />
                    <Text tabLabel='TODO' />
                </ScrollableTabView>
                <Modal isVisible={this.state.isModalVisible} style={Styles.ModalContent}>
                    <Loader/>
                </Modal>
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        allTask: state.allTask,
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setTaskAction: setTaskAction,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(HomeController);