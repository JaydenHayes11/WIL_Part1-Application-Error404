import { StyleSheet } from 'react-native';
const headerStyles = StyleSheet.create({
    header: {
        backgroundColor: '#1D38EF',
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    logocontainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ffd700',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    logoImage: {
        width: 40,  
        height: 40,
    },
    logoTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    navItem: {
        color: '#ffffff',
        fontSize: 14,
        paddingVertical: 5,
    },
    navItemActive: {
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
    },
});

const footerStyles = StyleSheet.create({
    footer: {
        backgroundColor: '#1D38EF',
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    section: {
        flex: 1,
    },
    title: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    text: {
        color: '#ffffff',
        fontSize: 11,
        marginBottom: 4,
    },
    link: {
        color: '#ffffff',
        fontSize: 11,
        marginBottom: 4,
    },
});

const coursesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    content: {
        flex: 1,
    },
    hero: {
        backgroundColor: '#1D38EF',
        padding: 30,
        alignItems: 'center',
    },
    heroTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    heroText: {
        color: '#ffffff',
        fontSize: 14,
    },
    section: {
        padding: 20,
        backgroundColor: '#2a2a2a',
        marginTop: 10,
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionSubtitle: {
        color: '#cccccc',
        fontSize: 14,
        marginBottom: 10,
    },
    price: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '600',
    },
    courseCard: {
        backgroundColor: '#cccccc',
        margin: 15,
        padding: 20,
        borderRadius: 5,
    },
    courseName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#000000',
    },
    courseDetails: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    courseInfo: {
        marginRight: 15,
        color: '#333333',
    },
    courseDescription: {
        color: '#333333',
        marginBottom: 10,
        lineHeight: 20,
    },
    coursePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
    },
});

const contactStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    content: {
        flex: 1,
    },
    hero: {
        backgroundColor: '#1D38EF',
        padding: 30,
        alignItems: 'center',
    },
    heroTitle: {
        color: '#ffffff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    heroText: {
        color: '#ffffff',
        fontSize: 14,
    },
    form: {
        padding: 20,
    },
    formTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    label: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 5,
        marginTop: 10,
    },
    input: {
        backgroundColor: '#cccccc',
        padding: 12,
        borderRadius: 5,
        color: '#000000',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#1D38EF',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    contactInfo: {
        backgroundColor: '#1D38EF',
        padding: 20,
        margin: 15,
        borderRadius: 5,
    },
    contactTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    contactText: {
        color: '#ffffff',
        fontSize: 14,
        marginBottom: 5,
    },
});

const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
    },
    content: {
        flex: 1,
    },
    hero: {
        backgroundColor: '#1D38EF',
        padding: 30,
        alignItems: 'center',
    },
    heroTitle: {
        color: '#ffffff',
        fontSize: 18,
        marginBottom: 5,
    },
    heroSubtitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    heroText: {
        color: '#ffffff',
        fontSize: 14,
    },
    card: {
        backgroundColor: '#1D38EF',
        margin: 15,
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cardTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
    },
    arrow: {
        color: '#ffffff',
        fontSize: 24,
    },
});
const Checkoutstyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        padding: 20,
        color: '#ffffff',
    },
    checktitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffffff',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffffff',
        marginTop: 16,
        marginBottom: 12,
    },
    courseItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#ffffffff',
        borderRadius: 4,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxInner: {
        width: 14,
        height: 14,
        backgroundColor: '#140b8fff',
        borderRadius: 2,
    },
    courseName: {
        flex: 1,
        fontSize: 16,
        color: '#ffffffff',
    },
    coursePrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ffffffff',
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 24,
        paddingTop: 16,
        borderTopWidth: 2,
        borderTopColor: '#333',
    },
    totalLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
    totalAmount: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffffff',
    },
});
export { headerStyles, footerStyles, coursesStyles, contactStyles, homeStyles, Checkoutstyles };