import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const Todo = (props) => {
    return (
        <TouchableOpacity
        onLongPress={() => props.onRemove(props.todo.id)}>
            <View style={styles.todo}>
                <Text>{props.todo.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
})