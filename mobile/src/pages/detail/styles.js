import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';


export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  incident: {
    padding: 24,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    marginTop: 36,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
  },

  incidentValue: {
    fontSize: 15,
    marginTop: 2,
    marginBottom: 24,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 30,
    color: '#13131a',
  },

  heroDescription: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16,
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#E02041',
    height: 50,
    width: '48%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },

})