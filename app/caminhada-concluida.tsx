import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function CaminhadaConcluidaScreen() {
  const router = useRouter();
  const {
    tempoExercicio = '00:00:00',
    tempoTotal = '00:00:00',
    calorias = '0',
    menorElevacao = '--',
    maiorElevacao = '--',
  } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backBtn}>{'<'} Caminhada</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.title}>Detalhes do exercício</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Duração do exercício</Text>
            <Text style={styles.value}>{tempoExercicio}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Duração Total</Text>
            <Text style={styles.value}>{tempoTotal}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Total de calorias</Text>
            <Text style={styles.value}>{calorias} kcal</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Menor elevação</Text>
            <Text style={styles.value}>{menorElevacao} m</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Maior elevação</Text>
            <Text style={styles.value}>{maiorElevacao} m</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.finishBtn} onPress={() => router.replace('/(tabs)/inicio')}>
        <Text style={styles.finishBtnText}>Concluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 24 },
  header: { paddingHorizontal: 16, marginBottom: 12 },
  backBtn: { fontSize: 18, color: '#222', fontWeight: 'bold' },
  card: { backgroundColor: '#fff', borderRadius: 18, margin: 16, padding: 18, elevation: 2 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 18 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  col: { flex: 1 },
  label: { fontSize: 14, color: '#888' },
  value: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  finishBtn: { backgroundColor: '#222', borderRadius: 16, margin: 32, padding: 16, alignItems: 'center' },
  finishBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});
