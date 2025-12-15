import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { useRouter } from 'expo-router';

export default function CiclismoScreen() {
	const [started, setStarted] = useState(false);
	const [coords, setCoords] = useState(null);
	const [region, setRegion] = useState(null);
	const [timer, setTimer] = useState(0);
	const [distance, setDistance] = useState(0);
	const [speed, setSpeed] = useState(null);
	const [elevation, setElevation] = useState(null);
	const [calories, setCalories] = useState(0);
	const [intervalId, setIntervalId] = useState(null);
	const watchRef = useRef(null);
	const router = useRouter();

	// Inicia o ciclismo
	const startRide = async () => {
		setStarted(true);
		setTimer(0);
		setDistance(0);
		setCalories(0);
		let { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			alert('Permissão de localização negada!');
			return;
		}
		let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest });
		setCoords(loc.coords);
		setRegion({
			latitude: loc.coords.latitude,
			longitude: loc.coords.longitude,
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		});
		setElevation(loc.coords.altitude ? Math.round(loc.coords.altitude) : 0);
		const id = setInterval(() => setTimer(t => t + 1), 1000);
		setIntervalId(id);
		watchRef.current = await Location.watchPositionAsync(
			{ accuracy: Location.Accuracy.Highest, distanceInterval: 1 },
			(loc) => {
				if (coords) {
					const d = Location.distance(
						coords,
						loc.coords
					);
					setDistance(prev => prev + d / 1000); // km
				}
				setCoords(loc.coords);
				setSpeed(loc.coords.speed ? (loc.coords.speed * 3.6).toFixed(1) : null); // km/h
				setElevation(loc.coords.altitude ? Math.round(loc.coords.altitude) : 0);
			}
		);
	};

	// Pausa ciclismo
	const pauseRide = () => {
		if (intervalId) clearInterval(intervalId);
		if (watchRef.current) watchRef.current.remove();
		setStarted(false);
	};

	// Conclui ciclismo
	const finishRide = () => {
		pauseRide();
		router.replace({
			pathname: '/atividade-concluida',
			params: {
				tipo: 'Ciclismo',
				tempoExercicio: formatTime(timer),
				tempoTotal: formatTime(timer),
				calorias: calories,
				menorElevacao: elevation || '--',
				maiorElevacao: elevation || '--',
				distancia: distance.toFixed(2),
				velocidade: speed || '--',
			},
		});
	};

	const formatTime = (s) => {
		const h = Math.floor(s / 3600).toString().padStart(2, '0');
		const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0');
		const sec = (s % 60).toString().padStart(2, '0');
		return `${h}:${m}:${sec}`;
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={() => router.back()}>
					<Ionicons name="arrow-back" size={28} color="#222" />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Ciclismo</Text>
				<Ionicons name="bicycle" size={28} color="#222" />
			</View>
			{!started ? (
				<>
					<View style={styles.mapBox}>
						<MapView
							style={styles.map}
							region={region || {
								latitude: -19.7537,
								longitude: -43.8581,
								latitudeDelta: 0.005,
								longitudeDelta: 0.005,
							}}
							showsUserLocation
							followsUserLocation
							initialRegion={{
								latitude: -19.7537,
								longitude: -43.8581,
								latitudeDelta: 0.005,
								longitudeDelta: 0.005,
							}}
						>
							<Marker
								coordinate={region || {
									latitude: -19.7537,
									longitude: -43.8581,
								}}
								title="Ponto Inicial"
							/>
						</MapView>
					</View>
					<TouchableOpacity style={styles.startBtn} onPress={startRide}>
						<Text style={styles.startBtnText}>Iniciar</Text>
					</TouchableOpacity>
				</>
			) : (
				<>
					<View style={styles.mapBox}>
						<MapView
							style={styles.map}
							region={region}
							showsUserLocation
							followsUserLocation
						>
							{region && (
								<Marker coordinate={region} />
							)}
						</MapView>
					</View>
					<View style={styles.metricsBox}>
						<Text style={styles.time}>{formatTime(timer)}</Text>
						<View style={styles.metricsRow}>
							<View style={styles.metricCell}><Text style={styles.metricLabel}>Distância</Text><Text style={styles.metricValue}>{distance.toFixed(2)} km</Text></View>
							<View style={styles.metricCell}><Text style={styles.metricLabel}>Velocidade</Text><Text style={styles.metricValue}>{speed ? `${speed} km/h` : '-- km/h'}</Text></View>
						</View>
						<View style={styles.metricsRow}>
							<View style={styles.metricCell}><Text style={styles.metricLabel}>Elevação</Text><Text style={styles.metricValue}>{elevation ? `${elevation} m` : '-- m'}</Text></View>
							<View style={styles.metricCell}><Text style={styles.metricLabel}>Ritmo</Text><Text style={styles.metricValue}>{speed ? `${(60 / speed).toFixed(1)} min/km` : '-- km/h'}</Text></View>
						</View>
						<View style={styles.metricsRow}>
							<View style={styles.metricCell}><Text style={styles.metricLabel}>Calorias</Text><Text style={styles.metricValue}>{calories} kcal</Text></View>
						</View>
					</View>
					<View style={styles.btnRow}>
						<TouchableOpacity style={styles.pauseBtn} onPress={pauseRide}><Text style={styles.pauseBtnText}>Pausar</Text></TouchableOpacity>
						<TouchableOpacity style={styles.finishBtn} onPress={finishRide} activeOpacity={0.7}>
							<Text style={styles.finishBtnText}>Concluir</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, backgroundColor: '#f5f5f5' },
	header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16, backgroundColor: '#fff' },
	headerTitle: { fontSize: 20, fontWeight: 'bold' },
	mapBox: { height: 260, borderRadius: 16, overflow: 'hidden', margin: 16, backgroundColor: '#eee' },
	map: { width: '100%', height: '100%' },
	startBtn: { backgroundColor: '#eee', margin: 32, borderRadius: 16, padding: 18, alignItems: 'center' },
	startBtnText: { fontSize: 20, fontWeight: 'bold', color: '#222' },
	metricsBox: { backgroundColor: '#fff', margin: 16, borderRadius: 16, padding: 16, alignItems: 'center' },
	time: { fontSize: 32, fontWeight: 'bold', marginBottom: 12 },
	metricsRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 8 },
	metricCell: { flex: 1, alignItems: 'center', padding: 8 },
	metricLabel: { fontSize: 14, color: '#888' },
	metricValue: { fontSize: 20, fontWeight: 'bold', color: '#222' },
	btnRow: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginTop: 12 },
	pauseBtn: { backgroundColor: '#eee', borderRadius: 16, padding: 16, flex: 1, alignItems: 'center', marginRight: 8 },
	pauseBtnText: { fontSize: 18, color: '#222', fontWeight: 'bold' },
	finishBtn: { backgroundColor: '#e74c3c', borderRadius: 16, padding: 16, flex: 1, alignItems: 'center', marginLeft: 8 },
	finishBtnText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
});
