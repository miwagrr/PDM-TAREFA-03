import React from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { useFilmesViewModel } from "../viewModel/filmeViewModel";

export default function FilmesScreen() {
  const vm = useFilmesViewModel();
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha WatchList</Text>

      <TextInput
        placeholder="Título do filme"
        value={vm.tituloInput}
        onChangeText={vm.setTituloInput}
        style={styles.input}
      />

      <View style={styles.botao}>
        <Button title="Adicionar" onPress={vm.adicionarFilme} />
      </View>

      {vm.erro && <Text style={styles.erro}>{vm.erro}</Text>}

      <FlatList
        data={vm.filmes}
        keyExtractor={(filme) => filme.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#222',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  botao: {
    marginBottom: 10,
  },
  erro: {
    color: 'red',
    marginBottom: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
  },
});
