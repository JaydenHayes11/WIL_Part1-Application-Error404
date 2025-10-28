import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { homeStyles } from '../styles/styles';


type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
    route: any;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <SafeAreaView style={homeStyles.container}>
            <Header navigation={navigation} currentScreen="Home" />
            <ScrollView style={homeStyles.content}>
                <View style={homeStyles.hero}>
                    <Text style={homeStyles.heroTitle}>Welcome to</Text>
                    <Text style={homeStyles.heroSubtitle}>Empowering the Nation</Text>
                    <Text style={homeStyles.heroText}>Be the change you want to see</Text>
                </View>

                <TouchableOpacity
                    style={homeStyles.card}
                    onPress={() => navigation.navigate('Courses')}
                >
                    <Text style={homeStyles.cardTitle}>Six-Month Courses</Text>
                    <Text style={homeStyles.arrow}>→</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={homeStyles.card}
                    onPress={() => navigation.navigate('Courses')}
                >
                    <Text style={homeStyles.cardTitle}>Six-Week Course</Text>
                    <Text style={homeStyles.arrow}>→</Text>
                </TouchableOpacity>
            </ScrollView>
            <Footer navigation={navigation} />
        </SafeAreaView>
    );
}

