// Import libraries ffor making a component
import React from 'react';
import { Text , View } from 'react-native'; 

// Make a component
const Header = (prop) => {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
          <Text style={textStyle}>{prop.headerText}</Text>
      </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 16 
    }
};

// Make the component available to other parts of the app
export { Header };
