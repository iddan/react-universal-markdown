import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Text, Linking} from 'react-native';

class NativeLink extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
  }

  onPress = async () => {
    const {destination} = this.props;
    const canOpen = await Linking.canOpenURL(destination);
    if (canOpen) {
      await Linking.openURL(destination);
    } else {
      console.warn(`URL "${destination}" can not be opened.
        If you're running on iOS - double check if scheme is allowed https://facebook.github.io/react-native/docs/linking.html#canopenurl`);
    }
  }

  render() {
    const {style, title, children} = this.props;
    return (
      <Text style={style} onPress={this.onPress}>
        {children}
      </Text>
    );
  }
}

export default NativeLink;
