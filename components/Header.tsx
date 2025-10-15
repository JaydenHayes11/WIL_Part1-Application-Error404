import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { headerStyles } from '../styles/styles';

type HeaderProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    currentScreen: keyof RootStackParamList;
};

export default function Header({ navigation, currentScreen }: HeaderProps) {
    return (
        <View style={headerStyles.header}>
            <View style={headerStyles.logo}>
                <View style={headerStyles.logoCircle}>
                    <Text style={headerStyles.logoText}>👤</Text>
                </View>
                <Text style={headerStyles.logoTitle}>Empowering the nation</Text>
            </View>
            <View style={headerStyles.nav}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={[headerStyles.navItem, currentScreen === 'Home' && headerStyles.navItemActive]}>
                        Home
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
                    <Text style={[headerStyles.navItem, currentScreen === 'Courses' && headerStyles.navItemActive]}>
                        Courses
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('About')}>
                    <Text style={[headerStyles.navItem, currentScreen === 'About' && headerStyles.navItemActive]}>
                        About
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <Text style={[headerStyles.navItem, currentScreen === 'Contact' && headerStyles.navItemActive]}>
                        Contact
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}