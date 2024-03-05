import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffff',
        marginTop: 5,
    },

    loginBox: {
        width: '85%',
        borderWidth: 2,
        borderColor: '#590d22',
        borderRadius: 7,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    inputBox: {
        width: '75%',
        height: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#75003a',
        padding: 17,
        fontSize: 15,
        color: '#ffff',
        marginTop: 10
    },
    button: {
        backgroundColor: "#a30051",
        width: '30%',
        height: 35,
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#a30051",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },

    textButton: {
        color: '#ffff',
        fontSize: 13,
        fontWeight: 'bold'
    }

})

export default styles