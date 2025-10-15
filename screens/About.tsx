import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';

type AboutScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'About'>;
};

const teamMembers = [
  {
    name: 'Amara Begg',
    role: 'A short description of Amara Begg and her specialties in IT',
  },
  {
    name: 'Jayden Hayes',
    role: 'A short description of Jayden Hayes and his specialties in IT',
  },
  {
    name: 'Fanesa Samuels',
    role: 'A short description of Fanesa Samuels and her specialties in IT',
  },
];

export default function AboutScreen({ navigation }: AboutScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} currentScreen="About" />
      <ScrollView style={styles.content}>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Welcome to Empowering the nation</Text>
          <Text style={styles.heroText}>Learn more about us</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Story (what the company is about)</Text>
          <Text style={styles.sectionText}>
            Empowering the Nation is dedicated to providing quality education and
            training to individuals seeking to develop their skills and improve their
            lives. We believe in the power of education to transform communities.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Mission (what the company aim is)</Text>
          <Text style={styles.sectionText}>
            Our mission is to empower individuals through accessible, high-quality
            training programs that equip them with practical skills for personal and
            professional growth.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet our team</Text>
          {teamMembers.map((member, index) => (
            <View key={index} style={styles.teamCard}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberRole}>{member.role}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
  },
  hero: {
    backgroundColor: '#3d4fc4',
    padding: 30,
    alignItems: 'center',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  heroText: {
    color: '#ffffff',
    fontSize: 14,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  sectionText: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 22,
  },
  teamCard: {
    backgroundColor: '#cccccc',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000000',
  },
  memberRole: {
    fontSize: 14,
    color: '#333333',
  },
});