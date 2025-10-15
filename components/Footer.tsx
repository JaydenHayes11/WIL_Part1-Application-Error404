import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {footerStyles} from '../styles/styles';

type FooterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function Footer({ navigation }: FooterProps) {
  return (
    <View style={footerStyles.footer}>
      <View style={footerStyles.section}>
        <Text style={footerStyles.title}>Empowering The Nation</Text>
        <Text style={footerStyles.text}>Learn to live the change</Text>
      </View>
      <View style={footerStyles.section}>
        <Text style={footerStyles.title}>Quick Links</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={footerStyles.link}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={footerStyles.link}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
          <Text style={footerStyles.link}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
          <Text style={footerStyles.link}>Contact</Text>
        </TouchableOpacity>
      </View>
      <View style={footerStyles.section}>
        <Text style={footerStyles.title}>Contact Info</Text>
        <Text style={footerStyles.text}>Email: info@empoweringthenation.com</Text>
        <Text style={footerStyles.text}>Phone: 011 973-4918</Text>
      </View>
    </View>
  );
}