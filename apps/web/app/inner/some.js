import { Text } from 'react-native';
import { useFonts, Inter_500Medium } from '@expo-google-fonts/inter';

const Test = () => {
    const [fontsLoaded] = useFonts({
        Inter_500Medium
    });

    if (!fontsLoaded) {
        return <Text>test: meh</Text>;
    }

    return (
        <>
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'Helvetica'
                }}
            >
                test: normal
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontFamily: 'Inter_500Medium'
                }}
            >
                test: It works!
            </Text>
        </>
    );
};

export default Test;
