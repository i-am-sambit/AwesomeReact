
import React, {Component} from 'react';
import {
    View,
    Text,
    SectionList,
} from 'react-native';

import {connect} from 'react-redux';
import renderIf from 'render-if';

import Styles, {SCREEN_WIDTH} from '../Styles/Styles';

let sectionData = [];

class AllTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            taskArray: [{createdOn: 'Hello', data:["Hello", "Hii"], key: 'Hello'}],
        }
    }

    componentWillReceiveProps(nextProps) {

        if ('allTask' in nextProps) {

            if (nextProps.allTask.length !== 0) {
                sectionData = nextProps.allTask.map((taskDetails, index) => {
                    return {
                        title: taskDetails.createdOn,
                        data: taskDetails.taskList,
                        index: index,
                    };
                });

                this.setState({
                    taskArray: sectionData,
                });
            }
        }
    }

    render (){
        return(
            <View style = {{flex: 1, width: SCREEN_WIDTH, backgroundColor: 'white'}}>
                <SectionList
                    sections = {this.state.taskArray}
                    renderItem = {(rowData) => this.renderRowMenu(rowData)}
                    renderSectionHeader = {(sectionData) => this.renderSectionHeader(sectionData)}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor = {(item, index) => index}
                    style = {{flex: 1}} />
            </View>
        )
    }

    renderSectionHeader = (sectionData) => {
        return (
            <View style = {Styles.TaskSectionHeader}>
                <View style = {{borderRadius: 5, backgroundColor: 'rgba(246, 241, 225, 1.0)', paddingLeft: 10,
                    paddingRight: 10,}}>
                    <Text style = {Styles.TaskSectionHeaderTextStyle}>{sectionData.section.title}</Text>
                </View>
            </View>
        );
    };

    /**
     * render row method for menu
     */
    renderRowMenu = (rowData) => {
        return(
            <View style = {Styles.TaskRow}>
                <View style = {{width: SCREEN_WIDTH - 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style = {[Styles.TaskRowTextStyle, {color: '#3e3e3e', fontSize: 14, marginLeft: 26}]}>{rowData.item.task}</Text>
                    <Text style = {[Styles.TaskRowTextStyle, {color: '#39ace5', fontSize: 11, marginRight: 28}]}>{rowData.item.status}</Text>
                </View>
                <View style = {{width: SCREEN_WIDTH - 20, flexDirection: 'row', paddingLeft: 26, paddingRight: 28, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style = {[Styles.TaskRowTextStyle, {color: '#cfa0a0'}]}>{rowData.item.dueDate}</Text>
                    <View style = {{width: 0.5, flex: 1, backgroundColor: '#e6e6e6'}} />
                    <Text style = {[Styles.TaskRowTextStyle, {color: '#8c8c8c', fontFamily: 'Roboto-Italic'}]}>{rowData.item.createdBy}</Text>
                    <View style = {{width: 0.5, flex: 1, backgroundColor: '#e6e6e6'}} />
                    <Text style = {[Styles.TaskRowTextStyle, {color: '#8c8c8c'}]}>{rowData.item.category}</Text>
                </View>
                <View style = {{backgroundColor: '#e6e6e6', width: SCREEN_WIDTH, height: 1.0,}}/>
            </View>
        )
    };
}

function mapStateToProps(state) {
    return {
        allTask: state.allTask,
    };
}

export default connect(mapStateToProps)(AllTask);