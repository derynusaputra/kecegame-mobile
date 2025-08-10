const {Dimensions} = require('react-native');

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const _width = 375;
const _height = 812;

const sizes = size => screenWidth * (size / _width);
const sizesH = size => screenHeight * (size / _width);
const r = size => size * (screenWidth / _width);

export {sizes, sizesH, r};
