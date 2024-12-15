import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, ListItem, Icon } from "react-native-elements";

const DetailsScreen = ({ route }) => {
  const { recipe } = route.params;

  const ingredients = [
    "2 piring nasi putih",
    "2 butir telur",
    "2 siung bawang putih",
    "3 siung bawang merah",
    "Kecap manis",
    "Garam dan merica",
  ];

  const steps = [
    "Tumis bawang putih dan bawang merah hingga harum",
    "Masukkan telur, aduk hingga setengah matang",
    "Masukkan nasi putih, aduk rata",
    "Tambahkan kecap manis, garam, dan merica",
    "Aduk hingga semua bumbu tercampur rata",
    "Sajikan selagi hangat",
  ];

  return (
    <ScrollView style={styles.container}>
      <Card>
        <Card.Title h4>{recipe.name}</Card.Title>
        <Card.Image source={{ uri: recipe.image }} style={styles.image} />
        <Text style={styles.description}>{recipe.description}</Text>

        <Text h4 style={styles.sectionTitle}>
          Bahan-bahan:
        </Text>
        {ingredients.map((item, index) => (
          <ListItem key={index} bottomDivider>
            <Icon name="dot-circle-o" type="font-awesome" size={12} />
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}

        <Text h4 style={styles.sectionTitle}>
          Cara Membuat:
        </Text>
        {steps.map((step, index) => (
          <ListItem key={index} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{`${index + 1}. ${step}`}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </Card>
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
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default DetailsScreen;
