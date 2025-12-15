
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function InicioScreen() {
  const router = useRouter();
  // Estados para métricas
  const [calorias, setCalorias] = useState(0);
  const [sono, setSono] = useState(0);
  const [agua, setAgua] = useState(0);
  // Estados para modal
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTipo, setModalTipo] = useState('');
  const [input, setInput] = useState('');

  const abrirModal = (tipo: string) => {
    setModalTipo(tipo);
    setModalVisible(true);
    setInput('');
  };
  const salvarValor = () => {
    if (modalTipo === 'calorias') setCalorias(Number(input));
    if (modalTipo === 'sono') setSono(Number(input));
    if (modalTipo === 'agua') setAgua(Number(input));
    setModalVisible(false);
    setInput('');
  };
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
        <TouchableOpacity style={styles.activityBtnDark} onPress={() => router.push('/ciclismo')}>
          <MaterialCommunityIcons name="bike" size={28} color="#222" />
          <Text style={styles.activityText} onPress={() => router.push('/ciclismo')}>Ciclismo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityBtnDark} onPress={() => router.push('/corrida')}>
          <MaterialCommunityIcons name="run-fast" size={28} color="#222" />
          <Text style={styles.activityText} onPress={() => router.push('/corrida')}>Corrida</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activityBtnDark} onPress={() => router.push('/natacao')}>
          <MaterialCommunityIcons name="swim" size={28} color="#222" />
          <Text style={styles.activityText} onPress={() => router.push('/natacao')}>Natação</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.metricsColumn}>
        <TouchableOpacity style={styles.metricCardFull} onPress={() => abrirModal('calorias')}>
          <MaterialCommunityIcons name="food-apple" size={32} color="#27ae60" />
          <Text style={styles.metricValue}>{calorias} kcal</Text>
          <Text style={styles.metricLabel}>Prato</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metricCardFull} onPress={() => abrirModal('sono')}>
          <MaterialCommunityIcons name="sleep" size={32} color="#2980b9" />
          <Text style={styles.metricValue}>{sono} hrs</Text>
          <Text style={styles.metricLabel}>Sono</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metricCardFull} onPress={() => abrirModal('agua')}>
          <Ionicons name="water" size={32} color="#2196F3" />
          <Text style={styles.metricValue}>{agua} mL</Text>
          <Text style={styles.metricLabel}>Água</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.3)' }}>
          <View style={{ backgroundColor:'#fff', padding:20, borderRadius:10, minWidth:250 }}>
            <Text style={{ fontWeight:'bold', fontSize:16, marginBottom:8 }}>
              {modalTipo === 'calorias' && 'Digite as calorias do prato:'}
              {modalTipo === 'sono' && 'Digite as horas de sono:'}
              {modalTipo === 'agua' && 'Digite a quantidade de água (mL):'}
            </Text>
            <TextInput
              keyboardType="numeric"
              value={input}
              onChangeText={setInput}
              style={{ borderBottomWidth:1, marginBottom:16, fontSize:16, padding:4 }}
              placeholder="Digite o valor"
            />
            <View style={{ flexDirection:'row', justifyContent:'flex-end', gap:8 }}>
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#888" />
              <Button title="Salvar" onPress={salvarValor} color="#27ae60" />
            </View>
          </View>
        </View>
      </Modal>
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