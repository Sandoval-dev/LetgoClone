import { StyleSheet , Dimensions} from "react-native";

const {width}= Dimensions.get('window')

const styles=StyleSheet.create({

    favorite: {
      width:width*0.29
    },
    favoriteView:{
        width:width*0.27,
        height:width*0.27
    },
    favoriteImage:{
        width:width*0.27,
        height:width*0.27,
        borderRadius:10
    },
    heart:{
        position:'absolute',
        bottom:5,
        right:4
    },
    labeledFav:{
        transform:[{rotate:"45deg"}],
        position:'absolute',
        top:12,
        right:-25,
        backgroundColor:'white',
        paddingVertical:3,
        paddingHorizontal:20
    },
    //------------

    main:{
       width:width*0.45,
       height:width*0.46,
       alignItems:'center',
    },
    mainView:{
        width:width*0.42,
        height:width*0.42
    },
    mainImg:{
        width:width*0.42,
        height:width*0.42,
        borderRadius:12
    },
  
})

export default styles