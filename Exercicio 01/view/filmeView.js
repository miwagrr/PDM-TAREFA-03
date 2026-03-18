import React from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { UseFilmesViewModel } from "../viewModel/filmeViewModel";

export default function FilmesScreen() {
  const vm = UseFilmesViewModel();
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
            <TouchableOpacity style={styles.botaoExcluir} onPress={() => vm.removerFilme(item.id)} activeOpacity={0.6}>
              <Text style={styles.textoExcluir}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  botaoExcluir: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 7,
    height: 30,
    width: 36,
  },

  textoExcluir: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
  },

  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ffff',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
    flexDirection: 'row',
    flex: 1,
  },
});import React from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { UseFilmesViewModel } from "../viewModel/filmeViewModel";

export default function FilmesScreen() {
  const vm = UseFilmesViewModel();
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
            <TouchableOpacity style={styles.botaoExcluir} onPress={() => vm.removerFilme(item.id)} activeOpacity={0.6}>
              <Text style={styles.textoExcluir}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  botaoExcluir: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 7,
  },

  textoExcluir: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
  },

  container: {
    flex: 1,
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#ffff',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
    flexDirection: 'row',
    flex: 1,
  },
});
