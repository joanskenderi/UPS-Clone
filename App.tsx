import { TailwindProvider } from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import utilities from "./tailwind.json";
import RootNavigator from "./navigator/RootNavigator";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/kindled-rabbit",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
