import React from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

function Profile() {
    const navigation = useNavigation();

    const goToSettings = () => {
        navigation.navigate('Settings');
    };
    return (
        <View style={{alignItems:'center', justifyContent:'center', flex:1}}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Details"
                onPress={goToSettings}
            />
        </View>
    );
}
export default Profile;