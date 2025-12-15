import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const sections = [
  {
    title: 'Mente vazia',
    data: [
      { title: 'Meditação', image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80' },
      { title: 'Histórias de sono', image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80' },
      { title: 'Relax', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    title: 'Perda de peso',
    data: [
      { title: 'Aeróbico', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
      { title: 'Kickboxing', image: 'https://images.unsplash.com/photo-1514512364185-4c2b67857b39?auto=format&fit=crop&w=400&q=80' },
      { title: 'Melhor postura', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
    ],
  },
  {
    title: 'Corrida',
    data: [
      { title: 'Primeiros 5km', image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=400&q=80' },
      { title: 'Correr 10km', image: 'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?auto=format&fit=crop&w=400&q=80' },
      { title: 'Hit 🔥', image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
    ],
  },
];

export default function BoaFormaScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Boa Forma</Text>
      {sections.map((section, idx) => (
        <View key={idx} style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          <View style={styles.cardRow}>
            {section.data.map((card, cidx) => (
              <View key={cidx} style={styles.card}>
                <Image source={{ uri: card.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{card.title}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 8,
  },
  sectionBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 18,
    padding: 10,
    marginBottom: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 4,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  card: {
    width: '32%',
    backgroundColor: '#fff',
    borderRadius: 16,
    alignItems: 'center',
    padding: 6,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 14,
    marginBottom: 6,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});