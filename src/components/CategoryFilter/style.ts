import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get('window')
const styles = StyleSheet.create({

    scrollStyle: {
        height: height * 0.089,
        marginBottom: 20,
        marginTop: 20,
        paddingHorizontal: 4

    },
    center: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,


    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 28
    },
    categoryName: {
        fontSize: 11,
        color: '#767575',
        fontWeight: 'bold'
    }
})

export default styles