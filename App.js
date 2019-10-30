import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<View style={imgLoja.container}>
				<Image resizeMode="contain" style={img.stretch} source={require("./assets/esmerilhadeira.jpg")} />
			</View>
			<View style={cento.container}>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
					<Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ferpar</Text>
					<Text style={{ fontSize: 10 }}>Estamos vendendo esmerilhadeiras</Text>
				</View>
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Button title="Comprar" onPress={() => Alert.alert("Obrigado pela aquisição")} /></View>
			</View>
			<View style={sobre.container}>
				<View style={{ flex:1 }}></View>
				<Text style={{ flex:10, justifyContent: 'center' }} >
					As melhores esmerilhadeiras que você vai encontrar na cidade.
				</Text>
				<View style={{ flex:1 }}></View>
			</View>
		</View>
	);
}

const img = StyleSheet.create({
	stretch: {
		width: 470,
		height: 470,
		flex: 1
	}
});
const imgLoja = StyleSheet.create({
	container: {
		flex: 2,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const cento = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
const sobre = StyleSheet.create({
	container: {
		flex: 2,
		flexDirection: 'row',
		backgroundColor: '#fff',
	},
});