
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function InicioScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.topRow}>
        <Ionicons name="add-circle" size={40} color="#27ae60" style={{ marginRight: 8 }} />
        <View style={{ flex: 1 }} />
        <TouchableOpacity>
          <MaterialCommunityIcons name="logout" size={28} color="#222" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <View style={styles.profileRow}>
          <FontAwesome name="user-circle" size={36} color="#27ae60" style={{ marginRight: 12 }} />
          <View>
            <Text style={styles.profileLabel}>nome:</Text>
            <Text style={styles.profileLabel}>Idade</Text>
            <Text style={styles.profileLabel}>Data Nascimento</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <FontAwesome5 name="heartbeat" size={40} color="#27ae60" />
          </View>
        </View>
      </View>
      <View style={styles.activityColumn}>
        <TouchableOpacity style={styles.activityBtnDark} onPress={() => router.push('/caminhada')}>
          <MaterialCommunityIcons name="walk" size={28} color="#222" />
          <Text style={styles.activityText} onPress={() => router.push('/caminhada')}>Caminhada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityBtnDark}>
          <MaterialCommunityIcons name="bike" size={28} color="#222" />
          <Text style={styles.activityText}>Ciclismo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityBtnDark}>
          <MaterialCommunityIcons name="run-fast" size={28} color="#222" />
          <Text style={styles.activityText}>Corrida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityBtnDark}>
          <MaterialCommunityIcons name="swim" size={28} color="#222" />
          <Text style={styles.activityText}>Natação</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.metricsColumn}>
        <View style={styles.metricCardFull}>
          <MaterialCommunityIcons name="food-apple" size={32} color="#27ae60" />
          <Text style={styles.metricValue}>0 kcal</Text>
          <Text style={styles.metricLabel}>Prato</Text>
        </View>
        <View style={styles.metricCardFull}>
          <MaterialCommunityIcons name="sleep" size={32} color="#2980b9" />
          <Text style={styles.metricValue}>0 hrs</Text>
          <Text style={styles.metricLabel}>Sono</Text>
        </View>
        <View style={styles.metricCardFull}>
          <Ionicons name="water" size={32} color="#2196F3" />
          <Text style={styles.metricValue}>0 mL</Text>
          <Text style={styles.metricLabel}>Água</Text>
        </View>
        <View style={styles.metricCardFull}>
          <MaterialCommunityIcons name="water-outline" size={32} color="#222" />
          <Text style={styles.metricValue}>0 mL</Text>
          <Text style={styles.metricLabel}>Meta</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 32,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileLabel: {
    fontSize: 15,
    color: '#222',
    marginBottom: 2,
  },
  activityColumn: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 20,
  },
  activityBtnDark: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 8,
    gap: 12,
  },
  activityText: {
    fontSize: 15,
    textAlign: 'left',
    color: '#222',
    fontWeight: 'bold',
  },
  metricsColumn: {
    flexDirection: 'column',
    gap: 10,
  },
  metricCardFull: {
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 10,
    gap: 16,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#222',
  },
  metricLabel: {
    fontSize: 15,
    color: '#888',
    fontWeight: 'bold',
  },
});