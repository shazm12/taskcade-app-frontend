import React,{useState} from 'react'
import { View, Text , TextInput , Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/core';
const SignInScreen = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigation  = useNavigation();

    const onSubmit = () => {


    }


    return (
        <View>
            <TextInput
                placeholder="john@mail.com"
                value={email}
                onChangeText={setEmail}
                style={{

                    color: '#7e7e7e',
                    fontSize: 18,
                    width: '100%',
                    marginVertical: 25,

                }}
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{

                    color: '#7e7e7e',
                    fontSize: 18,
                    width: '100%',
                    marginVertical: 25

                }}
            />

            <Pressable onPress={onSubmit} 
            style={{ 
                backgroundColor: '#e94350',
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30

                }}>
                <Text style={{ color: 'white', fontSize: 18 }}>Sign In</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('SignUpScreen')} 
             style={{ 
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30

                }}>
                <Text style={{ color: '#e94350', fontSize: 18 }}>New here? Sign Up</Text>
            </Pressable>




        </View>
    )
}

export default SignInScreen
