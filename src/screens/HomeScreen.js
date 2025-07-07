import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop' }}
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroTitle}>Vintage Treasures</Text>
          <Text style={styles.heroSubtitle}>
            Ontdek Unieke Tweede Hands Mode
          </Text>
          <Text style={styles.heroDescription}>
            Duurzame fashion met karakter. Vind jouw perfecte vintage piece bij Vintage Treasures.
          </Text>
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => navigation.navigate('Products')}
          >
            <Text style={styles.shopButtonText}>Shop Nu</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.features}>
        <Text style={styles.sectionTitle}>Waarom Vintage Treasures?</Text>
        
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>♻️</Text>
          <Text style={styles.featureTitle}>Duurzaam</Text>
          <Text style={styles.featureText}>
            Geef kleding een tweede leven en draag bij aan een duurzame toekomst.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>✨</Text>
          <Text style={styles.featureTitle}>Uniek</Text>
          <Text style={styles.featureText}>
            Vind unieke pieces die je nergens anders tegenkomt.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>💰</Text>
          <Text style={styles.featureTitle}>Betaalbaar</Text>
          <Text style={styles.featureText}>
            Kwaliteit mode tegen een fractie van de nieuwprijs.
          </Text>
        </View>
      </View>

      <View style={styles.cta}>
        <Text style={styles.ctaTitle}>Klaar om te shoppen?</Text>
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => navigation.navigate('Products')}
        >
          <Text style={styles.ctaButtonText}>Bekijk Collectie</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  hero: {
    position: 'relative',
    height: 300,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  heroDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  shopButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  shopButtonText: {
    color: '#8B4513',
    fontSize: 18,
    fontWeight: 'bold',
  },
  features: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  cta: {
    backgroundColor: '#8B4513',
    padding: 30,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  ctaButtonText: {
    color: '#8B4513',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;