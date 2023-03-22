import { Text, View } from 'react-native';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

import { Slot } from 'expo-router';

const Layout = () => {
    return (
        <View>
            <Text>inner layout</Text>
            <Slot />
        </View>
    );
};

export default Layout;
