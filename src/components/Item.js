import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    onDelete(id) {
        const { onDelete } = this.props;
        onDelete(id);
    }
    render() {
        return (
            <View style={styles.containerlist}>
               <View style={styles.textstyle}>
          <Text>NOMBRE: {this.props.name}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>DESCRIPCION: {this.props.description}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>FECHA: {this.props.date}</Text>
        </View>
        <View style={styles.textstyle}>
          <Text>HORA: {this.props.hour}</Text>
              
                <Button
                title="cambiar_estado"
                
                
                />
            </View>
        
            </View>
        );
            
    }
}

const styles = StyleSheet.create({
        image:{
            width:100,
            height:100,
        
        },
        containerList: {
            flexDirection: 'row',
            backgroundColor: '#fff',
            marginTop: 5,
            padding: 10,
            borderRadius:10,
            elevation:4,
        },
        texstyle:{
            justifyContent: 'flex-start',
            width:'70%'
        },
    });
    export default Item;