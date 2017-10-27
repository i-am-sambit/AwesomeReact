
import React, {Component} from 'react';
import {
    ActivityIndicator,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Styles from '../Styles/Styles'

export default class HeaderView extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return(
            <View style = {Styles.ModalView}>
                <ActivityIndicator
                    color = 'white'
                    size = 'large'
                />
                <Text style = {Styles.ModalTextStyle}>Please wait...</Text>
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