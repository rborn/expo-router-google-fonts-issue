import { Text } from 'react-native';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

import { Slot } from 'expo-router';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return <Text>meh</Text>;
    }

    return <Text>boo</Text>;
};

export default Layout;
