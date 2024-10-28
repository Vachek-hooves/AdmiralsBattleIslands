import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('TabNavigator');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <ImageBackground 
      source={require('../../assets/image/bg/welcome.png')} 
      style={styles.container}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)']}
        style={styles.overlay}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome to the</Text>
          <Text style={styles.titleText}>Admiral's</Text>
          <Text style={styles.titleText}>Battle Islands</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    padding: 30,
    backgroundColor: 'rgba(40, 40, 40, 0.75)',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#DAA520',
    alignItems: 'center',
    width: '90%',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  titleText: {
    color: '#DAA520',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
