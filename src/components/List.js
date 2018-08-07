import React, {Component} from 'react';
import {Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import ListItem from './ListItem';

class List extends Component{
    constructor(props){
        super(props);
        this.state = { 
            notesArray : [],
            noteText: '',
        }
    }

    render(){
        let notes = this.state.notesArray.map((val,key) => {
            return <ListItem key = {key} keyval = {keyval} val = {val}
              deleteMethod = {() => this.deleteNote(key)} />
        });

        const{
            header,
            headerText,
            container,
            scrollContainer,
            footer,
            inputText,
            addButton,
            addButtonText,
        } = styles;

        return(
            <View style = {container}>
                <View style = {header}>
                    <Text style = {headerText}>NOTER</Text>
                </View>

                <ScrollView style = {scrollContainer}> 
                    {notes}
                </ScrollView>

                <View style = {footer}> 
                    <TextInput 
                      onChangeText = {(noteText) => this.setState({noteText}) }
                      value = {this.state.noteText }
                      style = {inputText}
                      placeholder = '>note'
                      placeholderTextColor = 'white'
                      underlineColorAndroid = 'transparent'>
                    </TextInput>
                </View>

                <TouchableOpacity style = {addButton} onPress = {this.addNote.bind(this)}>
                    <Text style = {addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote(){
        if(this.state.noteText){
            var d = new Date();
            this.state.notesArray.push({
                'date' : d.getFullYear() + 
                "/" + (d.getMonth() + 1) + 
                "/" + d.getDate(),
                'note' : this.state.noteText
            });
            this.setState( {noteArray : this.state.notesArray });
            this.setState({noteText: ''});
        }
    }
    
    deleteNote(key){
        this.state.notesArray.splice(key,1);
        this.setState({'noteArray' :  this.state.notesArray});
    }
}


const styles = {
    container: {
        flex :1,
    },
    header : {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth : 10,
        borderBottomColor: '#ddd',
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scrollContainer:{
        flex : 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex : 10,
    },
    inputText:{
        alignSelf : 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed',
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor:'#e91e63',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },
};

export default List;