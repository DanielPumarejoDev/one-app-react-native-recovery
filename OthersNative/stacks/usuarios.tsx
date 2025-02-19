import { createStackNavigator, StackScreenProps } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { CustomIconBtn } from "../components/CustomIconBtn";

const Stack = createStackNavigator();

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