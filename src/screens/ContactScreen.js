import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ContactScreen = () => {
  const handleCall = () => {
    Linking.openURL('tel:+31201234567');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info@vintagetreasures.nl');
  };

  const handleWebsite = () => {
    Linking.openURL('https://www.vintagetreasures.nl');
  };

  const handleMap = () => {
    const address = 'Fashionstraat 123, 1000 AB Amsterdam';
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  const handleSocialMedia = (platform) => {
    let url = '';
    switch (platform) {
      case 'instagram':
        url = 'https://instagram.com/vintagetreasures';
        break;
      case 'facebook':
        url = 'https://facebook.com/vintagetreasures';
        break;
      case 'twitter':
        url = 'https://twitter.com/vintagetreasures';
        break;
    }
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Contact</Text>
        <Text style={styles.headerSubtitle}>
          Vragen? We helpen je graag!
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Bezoek Onze Winkel</Text>
        
        <TouchableOpacity style={styles.contactCard} onPress={handleMap}>
          <View style={styles.contactIcon}>
            <Ionicons name="location" size={24} color="#8B4513" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactTitle}>Adres</Text>
            <Text style={styles.contactText}>Fashionstraat 123</Text>
            <Text style={styles.contactText}>1000 AB Amsterdam</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Neem Contact Op</Text>

        <TouchableOpacity style={styles.contactCard} onPress={handleCall}>
          <View style={styles.contactIcon}>
            <Ionicons name="call" size={24} color="#8B4513" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactTitle}>Telefoon</Text>
            <Text style={styles.contactText}>+31 20 123 4567</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} onPress={handleEmail}>
          <View style={styles.contactIcon}>
            <Ionicons name="mail" size={24} color="#8B4513" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactTitle}>Email</Text>
            <Text style={styles.contactText}>info@vintagetreasures.nl</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.contactCard} onPress={handleWebsite}>
          <View style={styles.contactIcon}>
            <Ionicons name="globe" size={24} color="#8B4513" />
          </View>
          <View style={styles.contactDetails}>
            <Text style={styles.contactTitle}>Website</Text>
            <Text style={styles.contactText}>www.vintagetreasures.nl</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#ccc" />
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Openingstijden</Text>
        
        <View style={styles.hoursCard}>
          <View style={styles.hoursRow}>
            <Text style={styles.dayText}>Maandag - Vrijdag</Text>
            <Text style={styles.timeText}>10:00 - 18:00</Text>
          </View>
          <View style={styles.hoursRow}>
            <Text style={styles.dayText}>Zaterdag</Text>
            <Text style={styles.timeText}>10:00 - 17:00</Text>
          </View>
          <View style={styles.hoursRow}>
            <Text style={styles.dayText}>Zondag</Text>
            <Text style={styles.timeText}>12:00 - 16:00</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Volg Ons</Text>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialMedia('instagram')}
          >
            <Ionicons name="logo-instagram" size={30} color="#fff" />
            <Text style={styles.socialText}>Instagram</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialMedia('facebook')}
          >
            <Ionicons name="logo-facebook" size={30} color="#fff" />
            <Text style={styles.socialText}>Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.socialButton}
            onPress={() => handleSocialMedia('twitter')}
          >
            <Ionicons name="logo-twitter" size={30} color="#fff" />
            <Text style={styles.socialText}>Twitter</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#8B4513',
    padding: 30,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
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
  contactCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
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
  contactIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  contactText: {
    fontSize: 14,
    color: '#666',
  },
  hoursCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialButton: {
    backgroundColor: '#8B4513',
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
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
  socialText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold',
  },
});

export default ContactScreen;