import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import  {contactStyles}  from '../styles/styles';

type ContactScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function ContactScreen({ navigation }: ContactScreenProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [businessHours, setBusinessHours] = useState('');

  const handleSubmit = () => {
    if (!email || !phone || !address || !businessHours) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Your message has been sent!');
    setEmail('');
    setPhone('');
    setAddress('');
    setBusinessHours('');
  };

  return (
    <SafeAreaView style={contactStyles.container}>
      <Header navigation={navigation} currentScreen="Contact" />
      <ScrollView style={contactStyles.content}>
        <View style={contactStyles.hero}>
          <Text style={contactStyles.heroTitle}>Get in touch</Text>
          <Text style={contactStyles.heroText}>We are only a click away</Text>
        </View>

        <View style={contactStyles.form}>
          <Text style={contactStyles.formTitle}>Contact Information</Text>

          <Text style={contactStyles.label}>Email</Text>
          <TextInput
            style={contactStyles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#999999"
            keyboardType="email-address"
          />

          <Text style={contactStyles.label}>Phone</Text>
          <TextInput
            style={contactStyles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter your phone number"
            placeholderTextColor="#999999"
            keyboardType="phone-pad"
          />

          <Text style={contactStyles.label}>Address</Text>
          <TextInput
            style={contactStyles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            placeholderTextColor="#999999"
          />

          <Text style={contactStyles.label}>Business Hours</Text>
          <TextInput
            style={contactStyles.input}
            value={businessHours}
            onChangeText={setBusinessHours}
            placeholder="Enter preferred hours"
            placeholderTextColor="#999999"
          />

          <TouchableOpacity style={contactStyles.button} onPress={handleSubmit}>
            <Text style={contactStyles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={contactStyles.contactInfo}>
          <Text style={contactStyles.contactTitle}>Contact Info</Text>
          <Text style={contactStyles.contactText}>Email: info@empoweringthenation.com</Text>
          <Text style={contactStyles.contactText}>Phone: 011 973-4918</Text>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}

