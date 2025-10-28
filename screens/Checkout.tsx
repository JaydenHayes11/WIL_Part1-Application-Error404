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
import { contactStyles, Checkoutstyles } from '../styles/styles';
import { sixMonthCourses, sixWeekCourses } from './CoursesScreen';

type CheckoutScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};
interface Course {
  id: string,
  name: string,
  duration: string,
  price: string,
  maxStudents: number,
  description: string,
}



export default function CheckoutScreen({ navigation }: CheckoutScreenProps) {
  const [email, setEmail] = useState('');
  const [phone , setPhone] = useState('');
  const [name, setName ] = useState('');


  const handleSubmit = () => {
    if (!email || !phone || !name) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Your message has been sent!');
    setEmail('');
    setPhone('');
    setName('');
  };
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourse = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const calculateTotal = () => {
    const allCourses = [...sixMonthCourses, ...sixWeekCourses];
    return selectedCourses.reduce((total, courseId) => {
      const course = allCourses.find((c) => c.id === courseId);
      return total + (course ? parseInt(course.price.replace('R', '').replace(',', '')) : 0);
    }, 0);
  };

  const renderCheckbox = (courseId: string) => {
    const isSelected = selectedCourses.includes(courseId);
    return (
      <View style={Checkoutstyles.checkbox}>
        {isSelected && <View style={Checkoutstyles.checkboxInner} />}
      </View>
    );
  };
  const renderCourse = (course: Course) => (
    <TouchableOpacity
      key={course.id}
      style={Checkoutstyles.courseItem}
      onPress={() => toggleCourse(course.id)}
      activeOpacity={0.7}
    >
      {renderCheckbox(course.id)}
      <Text style={Checkoutstyles.courseName}>{course.name}</Text>
      <Text style={Checkoutstyles.coursePrice}>{course.price.toLocaleString()}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={contactStyles.container}>
      <Header navigation={navigation} currentScreen="Checkout" />
      <ScrollView style={contactStyles.content}>
        <View style={contactStyles.hero}>
          <Text style={contactStyles.heroTitle}>Lets get started</Text>
          <Text style={contactStyles.heroText}>Start your journey with us</Text>
        </View>

        <View style={contactStyles.form}>
          <Text style={contactStyles.formTitle}>Contact Details</Text>

          <Text style={contactStyles.label}>Name</Text>
          <TextInput
            style={contactStyles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor="#999999"
          />

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
        </View>
        <View style={Checkoutstyles.content}>
          <Text style={Checkoutstyles.title}>Select Your Courses</Text>

          <Text style={Checkoutstyles.sectionTitle}>Six-Month Courses</Text>
          {sixMonthCourses.map(renderCourse)}

          <Text style={Checkoutstyles.sectionTitle}>Six-Week Courses</Text>
          {sixWeekCourses.map(renderCourse)}

          {selectedCourses.length > 0 && (
            <View style={Checkoutstyles.totalContainer}>
              <Text style={Checkoutstyles.totalLabel}>Total:</Text>
              <Text style={Checkoutstyles.totalAmount}>
                R{calculateTotal().toLocaleString()}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
}
