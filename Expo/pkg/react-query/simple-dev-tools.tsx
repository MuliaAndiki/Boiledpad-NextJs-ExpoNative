import { useQueryClient } from "@tanstack/react-query";
import { Button, ScrollView, Text, View } from "react-native";

export function SimpleReactQueryDevtools() {
  const queryClient = useQueryClient();
  const queries = queryClient.getQueryCache().getAll();

  return (
    <ScrollView style={{ padding: 10 }}>
      <Button
        title="Log React Query Cache"
        onPress={() => console.log("Cache:", queries)}
      />
      {queries.map((q, i) => (
        <View key={i}>
          <Text>{q.queryHash}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
