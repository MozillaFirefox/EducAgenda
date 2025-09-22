import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importando os estilos

export default function App() {
  // Definindo o estado para o nome
  const [text_nome, setText_nome] = useState('');

  return (
    <View style={styles.container_principal}>
      <View>
        <Text style={styles.texto_instituicao}> EducAgenda </Text>
      </View>
      <View>
        <Text>Email:</Text>
        <TextInput
          style={styles.texto_caixa}
          placeholder="Digite seu email..."
          placeholderTextColor="gray"
          value={text_nome}
          onChangeText={setText_nome}
        />
        <Text>Senha:</Text>
        <TextInput
          style={styles.texto_caixa}
          placeholder="Digite sua senha..."
          placeholderTextColor="gray"
          value={text_nome}
          onChangeText={setText_nome}
        />
      </View>
    </View>
  );
}
