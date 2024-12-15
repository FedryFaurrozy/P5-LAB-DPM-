import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Card, Button, Icon } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const recipes = [
    {
      id: 1,
      name: "Nasi Goreng",
      image: "https://assets.unileversolutions.com/recipes-v2/242794.jpg",
      description: "Nasi goreng spesial dengan telur dan ayam",
    },
    {
      id: 2,
      name: "Rendang",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgGbHKsJvvwmWFJrk9AGRll_v2rh-kRqc2AuOU51Wpc2o6s0L-SSZxZRmjCXcLigL4ECadE_TfyF2DxRm_6V8zDlXT90m0JHTgaQFuxuU",
      description: "Rendang daging sapi khas Padang",
    },
    {
      id: 3,
      name: "Sate Ayam",
      image:
        "https://img-global.cpcdn.com/recipes/a6ca9f36b02b089b/400x400cq70/photo.jpg",
      description: "Sate ayam dengan bumbu kacang",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {recipes.map((recipe) => (
        <Card key={recipe.id}>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Image source={{ uri: recipe.image }} style={styles.image} />
          <Card.Divider />
          <Button
            icon={
              <Icon
                name="arrow-right"
                type="font-awesome"
                color="#ffffff"
                size={15}
                style={{ marginRight: 10 }}
              />
            }
            title="Lihat Resep"
            onPress={() => navigation.navigate("Details", { recipe })}
          />
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  image: {
    height: 200,
    marginBottom: 10,
  },
});

export default HomeScreen;
