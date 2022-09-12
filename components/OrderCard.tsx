import { View, Text } from "react-native";
import React from "react";

type Props = {
  item: Order;
};

const OrderCard = ({ item }: Props) => {
  return (
    <View>
      <Text>OrderCard</Text>
    </View>
  );
};

export default OrderCard;
