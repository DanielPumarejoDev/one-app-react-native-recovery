import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { CustomIconBtn } from "../components/CustomIconBtn";
import { View, Text } from "react-native";
const Stack = createStackNavigator();

export function AnimalesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AnimalesHome" component={AnimalesHomeScreen} />
      <Stack.Screen name="Mascotas" component={MascotasStack} />
      <Stack.Screen name="Ganado" component={GanadoStack} />
    </Stack.Navigator>
  );
}

export function AnimalesHomeScreen({ navigation }: StackScreenProps<any, any>) {
  return (
    <View>
      <Text>Mascotas Home</Text>
      <CustomIconBtn
        name={"apple1"}
        onPress={() => navigation.navigate("Mascotas")}
      />
      <Text>Ganado Home</Text>
      <CustomIconBtn
        name={"android1"}
        onPress={() => navigation.navigate("Ganado")}
      />
    </View>
  );
}

export function MascotasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MascotasHome" component={MascotasHomeScreen} />
      <Stack.Screen name="Gato" component={MascotaGatoScreen} />
      <Stack.Screen name="Perro" component={MascotaPerroScreen} />
    </Stack.Navigator>
  );
}

export function MascotasHomeScreen({ navigation }: StackScreenProps<any, any>) {
  return (
    <View>
      <Text>Gato Home</Text>
      <CustomIconBtn name={"isv"} onPress={() => navigation.navigate("Gato")} />
      <Text>Perro Home</Text>
      <CustomIconBtn
        name={"gift"}
        onPress={() => navigation.navigate("Perro")}
      />
    </View>
  );
}

export function MascotaGatoScreen() {
  return (
    <View>
      <Text>GATO</Text>
    </View>
  );
}
export function MascotaPerroScreen() {
  return (
    <View>
      <Text>PERRO</Text>
    </View>
  );
}

export function GanadoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GanadoHome" component={GanadoHomeScreen} />
      <Stack.Screen name="Vaca" component={GanadoVacaScreen} />
      <Stack.Screen name="Cerdo" component={GanadoCerdoScreen} />
      <Stack.Screen name="Pollo" component={GanadoPolloScreen} />
    </Stack.Navigator>
  );
}
export function GanadoHomeScreen({ navigation }: StackScreenProps<any, any>) {
  return (
    <View>
      <Text>Vaca</Text>
      <CustomIconBtn
        name={"book"}
        onPress={() => navigation.navigate("Vaca")}
      />
      <Text>Cerdo</Text>
      <CustomIconBtn
        name={"close"}
        onPress={() => navigation.navigate("Cerdo")}
      />
      <Text>Pollo</Text>
      <CustomIconBtn
        name={"check"}
        onPress={() => navigation.navigate("Pollo")}
      />
    </View>
  );
}

export function GanadoVacaScreen() {
  return (
    <View>
      <Text>Vaca</Text>
    </View>
  );
}
export function GanadoCerdoScreen() {
  return (
    <View>
      <Text>Cerdo</Text>
    </View>
  );
}
export function GanadoPolloScreen() {
  return (
    <View>
      <Text>Pollo</Text>
    </View>
  );
}
