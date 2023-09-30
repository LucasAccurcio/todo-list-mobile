import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles';

type Props = {
  name: string;
}

export function AddSubTask() {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Digite a sub tarefa'
        keyboardAppearance='dark'
        autoCapitalize='words'
        keyboardType='default'
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => { }}>
        <AntDesign name='pluscircleo' size={20} color={'#FFF'} />
      </TouchableOpacity>
    </View>
  )
}