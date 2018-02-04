import React from 'react';
import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

import PropTypes from 'prop-types';

const defaultProps = {
  title: '',
  subTitle: '',
  image: '',
  imagePosition: 'left',
  backgroundColor: '#83ccd2',
  opacity: 0.5,
  onPress: () => {},
};

const propsTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  subTitle: PropTypes.string,
  imagePosition: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    height: 130,
  },
  img: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 100
  },
  desc: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Cochin',
    fontWeight: 'bold',
    color: '#2c2c2c'
  }
});

const Card = (props) => {
  let flexDirection = props.imagePosition === 'left' ? 'row' : 'row-reverse';
  return(
    <TouchableOpacity
      style={[styles.container, { flexDirection }]}
      onPress={props.onPress}
    >
      <Image source={props.image} style={styles.img} />
      <View style={[styles.desc, { backgroundColor: props.backgroundColor }]}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subTitle}>{props.subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}


Card.propsTypes = propsTypes;
Card.defaultProps = defaultProps;

export default Card;