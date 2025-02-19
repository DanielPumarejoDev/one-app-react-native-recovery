// import { PanelStack } from "./others";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { IconButton } from "react-native-paper";

const Stack = createStackNavigator();

function CustomIconBtn({ name, onPress }: { name: any; onPress: () => void }) {
  return (
    <IconButton
      icon={() => (
        <AntDesign name={name} size={24} color="black" onPress={onPress} />
      )}
    />
  );
}
// PROPS { navigation, route }: StackScreenProps<any, any>
export function PanelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PanelHomeScreen} />
      <Stack.Screen name="Usuarios" component={UsuariosStack} />
      <Stack.Screen name="Animales" component={AnimalesStack} />
    </Stack.Navigator>
  );
}

export function PanelHomeScreen({ navigation }: StackScreenProps<any, any>) {
  return (
    <View>
      <Text>Usuarios</Text>
      <CustomIconBtn
        name={"user"}
        onPress={() => navigation.navigate("Usuarios")}
      />
      <Text>Animales</Text>
      <CustomIconBtn
        name={"github"}
        onPress={() => navigation.navigate("Animales")}
      />
    </View>
  );
}

export function UsuariosStack({
  navigation,
  route,
}: StackScreenProps<any, any>) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="UsuriosHome" component={UsuriosHomeScreen} />
      <Stack.Screen name="Gratuitos" component={UsuriosGratuitosScreen} />
      <Stack.Screen name="Pagados" component={UsuriosPagadosScreen} />
    </Stack.Navigator>
  );
}

export function UsuriosHomeScreen({ navigation }: StackScreenProps<any, any>) {
  return (
    <View>
      <Text>Pagados</Text>
      <CustomIconBtn
        name={"wallet"}
        onPress={() => navigation.navigate("Gratuitos")}
      />
      <Text>Gratuitos</Text>
      <CustomIconBtn
        name={"idcard"}
        onPress={() => navigation.navigate("Pagados")}
      />
    </View>
  );
}

export function UsuriosGratuitosScreen() {
  return (
    <View>
      <Text>Gratuitos</Text>
    </View>
  );
}
export function UsuriosPagadosScreen() {
  return (
    <View>
      <Text>Pagados</Text>
    </View>
  );
}

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

const configNavigationRef = {
  Panel: {
    initialRouteName: "Home",
    path: "panel",
    screens: {
      Usuarios: {
        initialRouteName: "UsuriosHome",
        path: "usuarios",
        screens: {
          Gratuitos: "gratuitos",
          Pagados: "pagados",
        },
      },
      Animales: {
        initialRouteName: "AnimalesHome",
        path: "animales",
        screens: {
          Mascotas: {
            initialRouteName: "MascotasHome",
            path: "mascotas",
            screens: {
              Gato: "gato",
              Perro: "perro",
            },
          },
          Ganado: {
            initialRouteName: "GanadoHome",
            path: "ganado",
            screens: {
              Vaca: "vaca",
              Cerdo: "cerdo",
              Pollo: "pollo",
            },
          },
        },
      },
    },
  },
};

<Stack.Screen name="Panel" component={PanelStack} />;
