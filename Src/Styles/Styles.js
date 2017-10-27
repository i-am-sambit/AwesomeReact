import { StyleSheet, Dimensions, Platform } from 'react-native';

const {width, height} = Dimensions.get('window');
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;
export const HEADER_HEIGHT = (Platform.OS === 'ios')? 50 : 40;
export const BACKGROUND_HEIGHT = (Platform.OS === 'ios')? SCREEN_HEIGHT - 60 : SCREEN_HEIGHT - 70;

export default StyleSheet.create({

    HeaderContainerView: {
        width: SCREEN_WIDTH,
        height: HEADER_HEIGHT,
        backgroundColor: 'rgba(49, 64, 107, 1)',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    HeaderTextStyle: {
        color: 'white',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0,
        fontFamily: 'Roboto-Regular',
        fontSize: 25,
        textAlign: 'center',
    },
    HeaderTextLabelStyle: {
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderBackButtonStyle: {
        backgroundColor: 'rgba(255, 255, 255, 0)',
        left: 0,
        top: 10,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    HeaderBackButtonImageStyle: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    TaskSectionHeader: {
        width: SCREEN_WIDTH,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TaskSectionHeaderTextStyle: {
        color: '#666666',
        fontSize: 13,
        fontFamily: 'Roboto',
    },
    TaskRow: {
        width: SCREEN_WIDTH,
        height: 62,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 10,
    },
    TaskRowTextStyle: {
        color: 'black',
        fontSize: 11,
        fontFamily: 'Roboto',
        paddingRight: 2,
        paddingLeft: 2,
    },
    ModalContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    ModalView: {
        width: SCREEN_WIDTH/2,
        height: SCREEN_HEIGHT/4,
        backgroundColor: 'rgba(50, 50, 50, 0.5)',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ModalTextStyle: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Roboto',
        bottom: 0,
        textAlign: 'center',
        letterSpacing: 1.2,
    },
});