import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native'
import Color from '../layout/colors.js';
import ModalDatePicker from 'react-native-datepicker-modal'
class TextCustomInput extends React.Component{
    constructor(props) {
        super(props);

    }
    render(){
        const {placeholder,onChangeText} = this.props;

        return (
         
                <View style={styles.inputtext}>
                    <TextInput style={styles.textinputcolor} 
                    placeholder={placeholder} 
                    onChangeText={(text) =>{
                        if (onChangeText != null){
                            onChangeText(text);
                        }
                       
                    }}
                    />
                </View>
                
          
        );
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex:0.1,
        backgroundColor: Color[Color.key].maincolor,
        alignItems: 'center',
    },
    inputtext:{
        flexDirection:'row',
       paddingLeft:5,
        backgroundColor:Color[Color.key].secondcolor,
        width: '90%',
        borderRadius: 10,
        marginBottom:10,
        elevation: 4,
       
    },
    textinputcolor:{
        height:'100%',
       color: Color[Color.key].fourthcolor,
    },
    
});
export default TextCustomInput;