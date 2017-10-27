
import React, {Component} from 'react';
import {
    AppRegistry,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Styles, {
    SCREEN_WIDTH,
    SCREEN_HEIGHT
} from '../Styles/Styles'

export default class HeaderView extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return(
            <View style = {Styles.HeaderContainerView}>
                <View style = {Styles.HeaderTextLabelStyle}>
                    <Text style = {Styles.HeaderTextStyle}>{this.props.headerTitle}</Text>
                </View>
            </View>
        )
    }

    /**
     * render row method for menu
     */
    renderRowMenu = (rowData) => {
        return(
            <TouchableOpacity style = {Styles.MenuContainer}>
                <View style = {Styles.MenuIcon}><Image source = {rowData.icon}/></View>
                <Text style = {Styles.MenuText}>{rowData.name}</Text>
            </TouchableOpacity>
        )
    };
}