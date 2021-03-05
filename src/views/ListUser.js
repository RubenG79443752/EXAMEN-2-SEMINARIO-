import React from 'react';
import {SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,} from 'react-native'
import Request from '../server/Request.js'
import {SHOW_TASK} from '../server/EndPoints.js'
import Item from '../components/Item.js'

class ListUser extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            list: [],
        };

    }
    componentDidMount() {
        var request = new Request("get", SHOW_TASK, {}, (response) => {
            if(response.status ==200){
                this.setState({
                    list: response.data,
                });

            }
        });
        request.start();

    }
    render(){
        return(
            <View>
                <Text style={{ textAlign: 'center' }}>
                    TAREAS
              </Text>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) => (
                        <Item
                           
                            name={item.name}
              description={item.description}
              date={item.date}
              hour={item.hour}
              realizado={(id) => {
                this.realizado(id);
              }}
                        />
                    )}
                    keyExtractor={(item) => item.id}

                />
        </View>
        );
        
    }
}
export default ListUser;