import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Icon } from "@rneui/themed";
import { useTailwind } from "tailwind-rn/dist";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "MyModal">
>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, "MyModal">;

const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();

  const {
    params: { name, userId },
  } = useRoute<ModalScreenRouteProp>();

  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <View>
      <TouchableOpacity
        style={tw("absolute right-5 top-5 z-10")}
        onPress={navigation.goBack}
      >
        <Icon name="closecircle" type="antdesign" />
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <View style={[tw("py-5 border-b"), { borderColor: "#59C1CC" }]}>
          <Text
            style={[tw("text-center text-xl font-bold"), { color: "#59C1CC" }]}
          >
            {name}
          </Text>
          <Text style={tw("text-center italic text-sm")}>Deliveries</Text>
        </View>
        <FlatList
          contentContainerStyle={{ paddingBottom: 200 }}
          data={orders}
          keyExtractor={(order) => order.trackingId}
          renderItem={({ item: order }) => {
            return <DeliveryCard order={order} />;
          }}
        />
      </View>
    </View>
  );
};

export default ModalScreen;
