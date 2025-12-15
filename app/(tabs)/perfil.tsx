
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function PerfilScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Meu perfil</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/auth/login')}>
          <Text style={styles.logoutBtnText}>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <Image
          source={{ uri: 'https://api.dicebear.com/7.x/bottts/svg?seed=User' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Bob Esponja</Text>
        <TouchableOpacity style={styles.editBtn}>
          <Text style={styles.editBtnText}>Editar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBox}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Conquistas</Text>
          <Text style={styles.sectionArrow}>{'>'}</Text>
        </View>
        <Text style={styles.sectionContent}>Nenhuma conquista</Text>
      </View>
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Resumo semanal</Text>
        <Text style={styles.sectionSub}>17 - 23 de dezembro</Text>
        <View style={styles.resumeRow}>
          <Text style={styles.resumeLabel}>Tempo ativo médio</Text>
          <Text style={styles.resumeValue}>48min</Text>
        </View>
        <View style={styles.resumeRow}>
          <Text style={styles.resumeLabel}>Média de sono</Text>
          <Text style={styles.resumeValue}>8h</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  logoutBtn: {
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 18,
    elevation: 1,
  },
  logoutBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e74c3c',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 32,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 18,
    alignItems: 'center',
    padding: 18,
    marginBottom: 18,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 18,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#eee',
    marginRight: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 1,
  },
  editBtn: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 18,
    alignSelf: 'center',
    elevation: 1,
  },
  editBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  sectionBox: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 18,
    elevation: 2,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionArrow: {
    fontSize: 22,
    color: '#888',
    fontWeight: 'bold',
  },
  sectionContent: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  sectionSub: {
    fontSize: 13,
    color: '#888',
    marginBottom: 8,
  },
  resumeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  resumeLabel: {
    fontSize: 15,
    color: '#222',
    flex: 1,
  },
  resumeValue: {
    fontSize: 15,
    color: '#222',
    fontWeight: 'bold',
    marginLeft: 12,
  },
});