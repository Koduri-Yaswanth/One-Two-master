import React from "react";
import { StyleSheet,View} from "react-native";

const PageColor = () =>{
    return(
    <View  style={[Style.box ]} />
        )
    }
const Style = StyleSheet.create({
    box:{
        flex:1,
        justifyContent:'center',
        
        position:'absolute',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 190,
        width:"100%",
        
        height:"60%",
        backgroundColor:"#F8325C",

        marginBottom:0,
        
        

    }
    
})
export default PageColor;
