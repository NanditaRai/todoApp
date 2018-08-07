import React , {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

class ListItem extends Component {
    render(){
        const {
            note,
            noteText,
            noteDelete,
            noteDeleteText
        } = styles;

        return(
            <View   key = {this.props.keyval} style = {note}>
               <Text style = {noteText}>{this.props.val.date}</Text>
               <Text style = {noteText}>{this.props.val.note}</Text>
               <TouchableOpacity style = {noteDelete} onPress = {this.props.deleteMethod}>
                    <Text style = {noteDeleteText}>D</Text>
               </TouchableOpacity>
            </View>
        );
    }
} 


const styles ={
    note:{
       position:'relative',
       padding:20,
       paddingRight:100,
       borderBottomWidth: 2,
       borderBottomColor: '#ededed',
    },
    noteText:{
       paddingLeft : 20,
       borderLeftWidth: 10,
       borderLeftColor : '#e91e63'
    },
    noteDelete:{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : '#2980b9',
        padding: 10,
        top : 10,
        bottom: 10,
        right: 10,
    },
    noteDeleteText:{
        color: 'white',
    }
};

export default ListItem;