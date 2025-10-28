import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { coursesStyles } from '../styles/styles';

type CoursesScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
};

export const sixMonthCourses = [

    {
        id: 'courseone',
        name: 'First Aid',
        duration: '6Months',
        price: 'R1,500',
        maxStudents: 30,
        description: 'Comprehensive first aid training covering emergency response techniques and CPR',
    },
    {
        id: 'coursetwo',
        name: 'Sewing',
        duration: '6months',
        price: 'R1,500',
        maxStudents: 20,
        description: 'Master professional sewing techniques, pattern making, and garment construction',
    },
    {
        id: 'coursethree',
        name: 'Landiscaping',
        duration: '6Months',
        price: 'R1,500',
        maxStudents: 18,
        description: 'Learn landscape design, plant care, garden maintenance, and sustainable practices',
    },
];

export const sixWeekCourses = [
    {
        id: 'coursefour',
        name: 'Child minding',
        duration: '6weeks',
        price: 'R750',
        maxStudents: 24,
        description: 'Fundamental childcare skills, safety protocols, and early childhood development principles',
    },
    {
        id: 'coursefive',
        name: 'Cooking',
        duration: '6weeks',
        price: 'R750',
        maxStudents: 20,
        description: 'Learn essential cooking techniques, kitchen safety, and meal preparation',
    },
    {
        id: 'coursesix',
        name: 'Gardening maintenance',
        duration: '6weeks',
        price: 'R750',
        maxStudents: 18,
        description: 'Learn landscape design, plant care, garden maintenance, and sustainable practices',
    },

];


export default function CoursesScreen({ navigation }: CoursesScreenProps) {
    return (
        <SafeAreaView style={coursesStyles.container}>
            <Header navigation={navigation} currentScreen="Courses" />
            <ScrollView style={coursesStyles.content}>
                <View style={coursesStyles.hero}>
                    <Text style={coursesStyles.heroTitle}>Begin to learn</Text>
                    <Text style={coursesStyles.heroText}>Be the change you want to see</Text>
                </View>

                <View style={coursesStyles.section}>
                    <Text style={coursesStyles.sectionTitle}>Six-Months Courses</Text>
                    <Text style={coursesStyles.sectionSubtitle}>
                        Comprehensive professional development programs with 6-month training and certification
                    </Text>
                    <Text style={coursesStyles.price}>R1,500 per course</Text>
                </View>

                {sixMonthCourses.map((course, index) => (
                    <View key={index} style={coursesStyles.courseCard}>
                        <Text style={coursesStyles.courseName}>{course.name}</Text>
                        <View style={coursesStyles.courseDetails}>
                            <Text style={coursesStyles.courseInfo}>⏱ {course.duration}</Text>
                            <Text style={coursesStyles.courseInfo}>👥 {course.maxStudents} max</Text>
                        </View>
                        <Text style={coursesStyles.courseDescription}>{course.description}</Text>
                        <Text style={coursesStyles.coursePrice}>{course.price}</Text>
                    </View>
                ))}

                <View style={coursesStyles.section}>
                    <Text style={coursesStyles.sectionTitle}>Six-Weeks Courses</Text>
                    <Text style={coursesStyles.sectionSubtitle}>
                        Intensive short-term programs on essential life skills and basic professional training
                    </Text>
                    <Text style={coursesStyles.price}>R750 per course</Text>
                </View>

                {sixWeekCourses.map((course, index) => (
                    <View key={index} style={coursesStyles.courseCard}>
                        <Text style={coursesStyles.courseName}>{course.name}</Text>
                        <View style={coursesStyles.courseDetails}>
                            <Text style={coursesStyles.courseInfo}>⏱ {course.duration}</Text>
                            <Text style={coursesStyles.courseInfo}>👥 {course.maxStudents} max</Text>
                        </View>
                        <Text style={coursesStyles.courseDescription}>{course.description}</Text>
                        <Text style={coursesStyles.coursePrice}>{course.price}</Text>
                    </View>
                ))}
            </ScrollView>
            <Footer navigation={navigation} />
        </SafeAreaView>
    );
}