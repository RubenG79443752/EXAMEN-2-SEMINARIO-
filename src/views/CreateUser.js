import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Color from '../layout/colors.js';
import TextCustomInputs from '../components/TextCustomInput.js'
import ModalDatePicker from 'react-native-datepicker-modal'
import CustomButtons from '../components/CustomButtons.js';
import Request from '../server/Request.js'
import {CREATE_TAREA} from '../server/EndPoints.js'
class CreateUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description:'',
            date:'',
            hour:'',

        };
    }
        
        componentDidMount() {}
        registerData(){
            console.log(this.state);
            var req = new Request("post", CREATE_TAREA, this.state, (response) => {
                if(response.status == 200){
                    alert('tarea añadida recarge para ver cambios en lalista de tareas  (R)')
                }
            });
            req.start();
        }

    
    render() {
        return (
            <View style={styles.container}>
                <TextCustomInputs placeholder="Nombre " 
                onChangeText={(txt) => {
                    this.setState({
                        name: txt,
                    })
                }}
                />
                <TextCustomInputs placeholder="descripcion"
                onChangeText={(txt) => {
                    this.setState({
                        description: txt,
                    })
                }}
                />
                <TextCustomInputs placeholder="Fecha"
                onChangeText={(txt) => {
                    this.setState({
                        date: txt,
                    })
                }}
                />
                <TextCustomInputs placeholder="Hora"
                onChangeText={(txt) => {
                    this.setState({
                        hour: txt,
                    })
                }}
                />
                <CustomButtons title="Crear Tarea" onPress={() =>{
                    this.registerData();
                }}/>
                
            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {

        flex:1,
        backgroundColor: Color[Color.key].maincolor,
        alignItems:'center',
    }
});
export default CreateUsers;