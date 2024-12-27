/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type RootStackParamList = {
  Home: undefined;
  Newing: undefined;
};

type WelcomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type NewingProps = NativeStackScreenProps<RootStackParamList, 'Newing'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const WelcomeReactNative = ({navigation}: WelcomeProps) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView style={backgroundStyle}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Bienvenid@ a React Native</Text>
          <Button
            title="Ir a Newing"
            onPress={() => navigation.navigate('Newing')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Newing = ({navigation}: NewingProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Entraste a Newing</Text>
      <Button
        title="Volver a la bienvenida"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeReactNative} />
        <Stack.Screen name="Newing" component={Newing} />
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? 'light-content' : 'dark-content'}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <ScrollView
    //     contentInsetAdjustmentBehavior="automatic"
    //     style={backgroundStyle}>
    //     <Header />
    //     <View
    //       style={{
    //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //       }}>
    //       <Section title="Step One">
    //         Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //         screen and then come back to see your edits.
    //       </Section>
    //       <Section title="See Your Changes">
    //         <ReloadInstructions />
    //       </Section>
    //       <Section title="Debugs">
    //         <DebugInstructions />
    //       </Section>
    //       <Section title="Learn More">
    //         Read the docs to discover what to do next:
    //       </Section>
    //       <LearnMoreLinks />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
