import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { stylesOth } from "../styles";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import { RadioButton, TextInput } from "react-native-paper";

const Stack = createStackNavigator();

type LoginFormValues = {
  nickName: string;
  screen: string;
};

export function FormTestStack({
  navigation,
  route,
}: StackScreenProps<any, any>) {
  const methods = useForm<LoginFormValues>({
    mode: "all",
    defaultValues: {
      nickName: "",
      screen: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <Stack.Navigator>
        <Stack.Screen
          name="UsuriosHome"
          component={Login}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="PanelDeControl"
          component={PanelDeControl}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="Landing" component={Landing} />
      </Stack.Navigator>
    </FormProvider>
  );
}
{
  /* <CustomIconBtn
    name={"wallet"}
    onPress={() => navigation.navigate("Gratuitos")}
  /> */
}
{
  /* <CustomIconBtn
    name={"idcard"}
    onPress={() => navigation.navigate("Pagados")}
  /> */
}

export function Login({ navigation }: StackScreenProps<any, any>) {
  const { control, handleSubmit, formState } =
    useFormContext<LoginFormValues>();

  const onSubmit = (val: LoginFormValues) => {
    navigation.navigate(val.screen);
  };

  return (
    <View style={stylesOth.screenSpace}>
      <Text style={stylesOth.title}>Iniciar Sesion</Text>

      <Controller
        control={control}
        name="nickName"
        rules={{
          required: "Es necesario que escribas un Apodo",
          minLength: {
            value: 5,
            message: "El apodo debe ser minimo de 5 letras",
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            disabled={false}
            label={"Escribe un Apodo"}
            placeholder="Apodo"
            style={{ backgroundColor: "transparent" }}
            theme={{
              colors: {
                onSurfaceVariant: "#000000",
                surfaceVariant: "white",
              },
            }}
            maxLength={500}
            multiline
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            spellCheck={false}
            dense
            underlineColor="#707070"
          />
        )}
      />
      {formState.errors.nickName ? (
        <Text style={stylesOth.textError}>
          {formState.errors.nickName?.message}
        </Text>
      ) : null}

      <Text>Ir a la Vista</Text>
      <Controller
        control={control}
        name="screen"
        rules={{
          required: "Selecciona Una Vista",
        }}
        render={({ field: { value, onChange } }) => (
          <RadioButton.Group onValueChange={onChange} value={value}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="PanelDeControl" />
              <Text>Panel de control</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton value="Landing" />
              <Text>Landing Page</Text>
            </View>
          </RadioButton.Group>
        )}
      />
      {formState.errors.screen ? (
        <Text style={stylesOth.textError}>
          {formState.errors.nickName?.message}
        </Text>
      ) : null}
      <Button title="Continuar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
export function PanelDeControl() {
  const { control, getValues } = useFormContext<LoginFormValues>();

  return (
    <View style={stylesOth.screenSpace}>
      <Text>Bienvido al Panel de Control {getValues("nickName")}</Text>
    </View>
  );
}
export function Landing() {
  const { control, getValues } = useFormContext<LoginFormValues>();

  return (
    <View style={stylesOth.screenSpace}>
      <Text>Bienvido a la Landing Page {getValues("nickName")}</Text>
    </View>
  );
}
