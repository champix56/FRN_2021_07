import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    // backgroundColor:'grey',
    marginTop: -15,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingVertical: 40,
  },
  button: {
    width: 48,
    height: 48,
  },
  appName: {
    textAlign: 'center',
    color: 'tomato',
    fontSize: 32,
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
  },
});
