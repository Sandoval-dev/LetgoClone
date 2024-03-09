import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    productsContainer: {
        width: '96%', marginLeft: '4%'
    },

    titleProducts: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center',
        marginBottom:12,
        marginRight:'4%'
        //backgroundColor:'red',
        
    },
    topicTitle:{
        fontWeight:'bold',
        fontSize:16
    },
    detailTitle:{
        fontSize:14,
        fontWeight:'bold',
        color:'#F24E61'
    },
    rightTitle:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default styles