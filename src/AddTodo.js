import React, {useState} from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';

export const AddTodo = (props) => {

    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()){
            props.onSubmit(value)
            setValue('')
        } else {
            Alert.alert('To do is empty')
        }
        
    }

    return (
        <View style={styles.block}>
            <TextInput style={styles.input}
            onChangeText = {setValue}
            value = {value}
            placeholder = "Put task name"
            autoCorrect = {false}
            autoCapitalize = 'none'
            />
            <Button title="Add task" onPress={pressHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
        
    },
    input:{
        width:'70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'
    }
})