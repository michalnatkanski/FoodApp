import { PixelRatio, Dimensions } from "react-native";

const WINDOW_WIDTH = Dimensions.get('window').width;

const guideLineBaseWidth = 375;

export function scaleFont(size) {
    return size * PixelRatio.getFontScale();
}

export function scaleSize(size) {
    return (WINDOW_WIDTH / guideLineBaseWidth) * size;
}
