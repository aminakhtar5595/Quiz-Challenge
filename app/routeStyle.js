import { StyleSheet, Platform } from "react-native";
import { Actions } from "react-native-router-flux";

const Styles = StyleSheet.create({

    titleText: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        lineHeight: 30,
        flex: 1,
        alignItems: "flex-start"
    },
    navigation_Bar_Style: {
        backgroundColor: '#F04306',
        height: Platform.OS === "ios" ? 50 : 60,
        paddingBottom: Platform.OS === "ios" ? 10 : 0,
        borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
        borderBottomColor: '#F04306',
        elevation: 0,
    },
    left: {
        alignItems: "center",
        marginLeft: Platform.OS === "ios" ? 15 : 10
        // marginRight: Platform.OS === "ios" ? 15 : 10,
    },
    leftIcon: {
        color: 'white', 
        fontSize: 25
    },
    orderText: {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        lineHeight: 30,
        paddingLeft: 15,
        alignItems: "flex-start"
    },
    centerView: {
        width: '100%', 
        alignItems: 'center'
    },
    centerImage: {
        width: 72, 
        height: 24  
    },
    leftView: {
        alignItems: 'center', 
        marginLeft: 15  
    },
    leftImage: {
        width: 20, 
        height: 20
    },
    rightView: {
        alignItems: 'center', 
        marginRight: 15
    },
    tabBarStyle: {
        backgroundColor: 'white',
    },
    tabStyle: {
        width: '100%',
        height: '100%',
    },
})

export default Styles