import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { UseFilmesViewModel } from '../viewModel/filmeViewModel';

export default function ListaScreen() {
  const navigation = useNavigation();
  const vm = UseFilmesViewModel();

useFocusEffect(
  useCallback(() => {
    vm.recarregar();
  }, [])
);

  return (
    <View style={styles.container}>
      {vm.filmes.length === 0 && (
        <Text style={styles.vazio}>Nenhum filme na lista.</Text>
      )}

      <FlatList
        data={vm.filmes}
        keyExtractor={(filme) => filme.id.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{index + 1}. {item.titulo}</Text>
            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() => vm.removerFilme(item.id)}
              activeOpacity={0.6}
            >
              <Text style={styles.textoExcluir}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={() => navigation.navigate('Adicionar')}
        activeOpacity={0.7}
      >
        <Text style={styles.textoAdicionar}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 16,
  backgroundColor: 'transparent',
},
  vazio: {
    textAlign: 'center',
    color: '#999',
    marginTop: 40,
    fontSize: 16,
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
    alignItems: 'center',
  },
  itemTexto: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  botaoExcluir: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 7,
    height: 30,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoExcluir: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  botaoAdicionar: {
    backgroundColor: '#CC6A00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  textoAdicionar: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
