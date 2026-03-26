import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UseFilmesViewModel } from '../viewModel/filmeViewModel';

export default function AdicionarScreen() {
  const navigation = useNavigation();
  const vm = UseFilmesViewModel();

  function handleAdicionar() {
    vm.adicionarFilme();
    if (!vm.erro) {
      navigation.goBack();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Título do filme:</Text>

      <TextInput
        value={vm.tituloInput}
        onChangeText={vm.setTituloInput}
        style={styles.input}
      />

      {vm.erro && <Text style={styles.erro}>{vm.erro}</Text>}

      <TouchableOpacity
        style={styles.botao}
        onPress={handleAdicionar}
        activeOpacity={0.7}
      >
        <Text style={styles.textoBotao}>Adicionar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoCancelar}
        onPress={() => navigation.goBack()}
        activeOpacity={0.7}
      >
        <Text style={styles.textoCancelar}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'transparent',
  },
  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  erro: {
    color: 'red',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#CC6A00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoCancelar: {
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  textoCancelar: {
    color: '#666',
    fontSize: 16,
  },
});
