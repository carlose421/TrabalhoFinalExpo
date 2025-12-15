import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function JuntosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Juntos</Text>
      <View style={styles.profileRow}>
        <Image
          source={{ uri: 'https://api.dicebear.com/7.x/bottts/svg?seed=User' }}
          style={styles.avatar}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={styles.levelLabel}>Novato</Text>
          <Text style={styles.levelValue}>Nív. 1</Text>
        </View>
        <View style={styles.divider} />
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.friendsLabel}>Amigos</Text>
          <Text style={styles.friendsValue}>0</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.createBtn}>
        <Text style={styles.createBtnText}>Criar desafio</Text>
      </TouchableOpacity>
      <View style={styles.challengeCard}>
        <View style={{ flex: 1 }}>
          <Text style={styles.challengeTitle}>Neve, dezembro</Text>
          <Text style={styles.challengeDesc}>Participem e fiquem em forma juntos.</Text>
          <Text style={styles.challengeParticipants}>Participantes{"\n"}<Text style={styles.challengeParticipantsNum}>1.011.841</Text></Text>
          <TouchableOpacity style={styles.enterBtn}>
            <Text style={styles.enterBtnText}>Entrar</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/100/000000/polar-bear.png' }}
          style={styles.challengeImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 12,
    marginBottom: 18,
    elevation: 2,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  levelLabel: {
    fontSize: 14,
    color: '#888',
  },
  levelValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 10,
  },
  friendsLabel: {
    fontSize: 14,
    color: '#888',
  },
  friendsValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  createBtn: {
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 22,
    elevation: 2,
  },
  createBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  challengeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 8,
    elevation: 2,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  challengeDesc: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  challengeParticipants: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
  },
  challengeParticipantsNum: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  enterBtn: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    marginTop: 6,
  },
  enterBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  challengeImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 12,
    backgroundColor: '#e0e0e0',
  },
});