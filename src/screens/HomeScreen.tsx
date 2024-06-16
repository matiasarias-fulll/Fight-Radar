import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Button, Icon } from 'react-native-elements';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const [cards, setCards] = useState([
    {
      name: 'Sebastiano, 69',
      job: 'Patchman at FULLL',
      school: 'Chad University \'09',
      distance: '2 miles away',
      image: require('../assets/images/seboo.png'), // Assure-toi d'avoir des images appropriées dans le dossier assets
    },
    // Ajoute plus d'objets utilisateurs ici
  ]);

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={card.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{card.name}</Text>
              <Text style={styles.info}>{card.job}</Text>
              <Text style={styles.info}>{card.school}</Text>
              <Text style={styles.info}>{card.distance}</Text>
            </View>
          </View>
        )}
        onSwiped={(cardIndex) => { console.log(cardIndex); }}
        onSwipedAll={() => { console.log('All cards swiped'); }}
        cardIndex={0}
        backgroundColor={'#f0f0f0'}
        stackSize={3}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'red',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'green',
                color: 'white',
                fontSize: 24,
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 20,
                marginLeft: 20,
              },
            },
          },
        }}
        animateOverlayLabelsOpacity
        animateCardOpacity
        swipeBackCard
      />
      <View style={styles.buttonsContainer}>
        <Button
          icon={<Icon name="refresh" size={30} color="orange" />}
          buttonStyle={styles.button}
          onPress={() => { /* Implémente la fonction pour refaire apparaître les cartes */ }}
        />
        <Button
          icon={<Icon name="close" size={30} color="red" />}
          buttonStyle={styles.button}
          onPress={() => { /* Implémente la fonction pour le swipe left */ }}
        />
        <Button
          icon={<Icon name="star" size={30} color="blue" />}
          buttonStyle={styles.button}
          onPress={() => { /* Implémente la fonction pour la super like */ }}
        />
        <Button
          icon={<Icon name="star" size={30} color="green" />}
          buttonStyle={styles.button}
          onPress={() => { /* Implémente la fonction pour le swipe right */ }}
        />
        <Button
          icon={<Icon name="star" size={30} color="purple" />}
          buttonStyle={styles.button}
          onPress={() => { /* Implémente la fonction pour le boost */ }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.65,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: width - 40,
    height: width - 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    marginTop: 15,
    marginLeft: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    color: 'gray',
    marginTop: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
