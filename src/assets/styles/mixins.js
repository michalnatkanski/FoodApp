import { PixelRatio } from "react-native";

export function scaleFont(size) {
    return size * PixelRatio.getFontScale();
}

