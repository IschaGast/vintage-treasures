import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop' }}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Over Vintage Treasures</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Ons Verhaal</Text>
        <Text style={styles.paragraph}>
          Vintage Treasures is ontstaan uit een passie voor duurzame mode en het geven van een 
          tweede leven aan prachtige kledingstukken. Wij geloven dat mode niet wegwerp hoeft te zijn 
          en dat elk kledingstuk zijn eigen verhaal heeft.
        </Text>

        <Text style={styles.paragraph}>
          Onze collectie bestaat uit zorgvuldig geselecteerde vintage en tweede hands items die 
          elk hun eigen charme en karakter hebben. Van klassieke leren jassen tot elegante 
          vintage jurken - elk item wordt door ons team persoonlijk uitgezocht.
        </Text>

        <Text style={styles.sectionTitle}>Onze Missie</Text>
        <Text style={styles.paragraph}>
          We willen mode toegankelijk maken voor iedereen, zonder de planeet te belasten. 
          Door tweede hands kleding een nieuw leven te geven, verminderen we textielafval 
          en promoten we een circulaire economie.
        </Text>

        <Text style={styles.sectionTitle}>Waarom Kiezen Voor Vintage?</Text>
        
        <View style={styles.reasonCard}>
          <Text style={styles.reasonTitle}>🌍 Duurzaamheid</Text>
          <Text style={styles.reasonText}>
            Verminder je ecologische voetafdruk door bestaande kleding een tweede kans te geven.
          </Text>
        </View>

        <View style={styles.reasonCard}>
          <Text style={styles.reasonTitle}>✨ Uniciteit</Text>
          <Text style={styles.reasonText}>
            Vind unieke pieces die je persoonlijkheid perfect uitdrukken.
          </Text>
        </View>

        <View style={styles.reasonCard}>
          <Text style={styles.reasonTitle}>💎 Kwaliteit</Text>
          <Text style={styles.reasonText}>
            Vintage kleding is vaak van betere kwaliteit dan hedendaagse fast fashion.
          </Text>
        </View>

        <View style={styles.reasonCard}>
          <Text style={styles.reasonTitle}>💰 Betaalbaar</Text>
          <Text style={styles.reasonText}>
            Krijg designer kwaliteit tegen een fractie van de nieuwprijs.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Ons Team</Text>
        <Text style={styles.paragraph}>
          Ons team bestaat uit fashion liefhebbers die gepassioneerd zijn over duurzame mode. 
          We selecteren elke item met zorg en zorgen ervoor dat alles in perfecte staat is 
          voordat het in onze collectie komt.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    height: 200,
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(139, 69, 19, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 15,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 15,
    textAlign: 'justify',
  },
  reasonCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reasonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  reasonText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666',
  },
});

export default AboutScreen;