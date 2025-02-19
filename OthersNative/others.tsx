import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { Text, View } from "react-native";
// Stacks
import { FormTestStack } from "./stacks/form";
import { UsuariosStack } from "./stacks/usuarios";
import { AnimalesStack } from "./stacks/animales";
// Components
import { ListNavigation } from "./components/ListNavigation";
// Styles
import { stylesOth } from "./styles";

const Stack = createStackNavigator();

// PROPS { navigation, route }: StackScreenProps<any, any>
export function PanelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={PanelHomeScreen} />
      <Stack.Screen name="Usuarios" component={UsuariosStack} />
      <Stack.Screen name="Animales" component={AnimalesStack} />
      <Stack.Screen
        name="FormsTest"
        component={FormTestStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export function PanelHomeScreen({ navigation }: StackScreenProps<any, any>) {
  const listNavigations = [
    { iconName: "user", text: "Usuarios", screen: "Usuarios" },
    { iconName: "github", text: "Animales", screen: "Animales" },
    { iconName: "form", text: "Formulario", screen: "FormsTest" },
  ];

  return (
    <View style={stylesOth.screenSpace}>
      <Text style={stylesOth.title}>Navegaciones Others</Text>
      <View style={stylesOth.contentNavigation}>
        {listNavigations.map(({ iconName, screen, text }) => (
          <ListNavigation
            key={screen}
            iconName={iconName}
            text={text}
            onPress={() => navigation.navigate(screen)}
          />
        ))}
      </View>
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
