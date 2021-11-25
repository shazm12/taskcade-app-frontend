import React,{useState} from 'react'
import { View, Text, TextInput,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const SignUpScreen = () => {

    const navigaiton = useNavigation();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');

    const onSubmit = () => {

    }
    
    
    return (
        <View>


            <TextInput
                placeholder="John Snow"
                value={name}
                onChangeText={setName}
                style={{

                    color: '#7e7e7e',
                    fontSize: 18,
                    width: '100%',
                    marginVertical: 25,

                }}
            />
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
                <Text style={{ color: 'white', fontSize: 18 }}>Sign Up</Text>
            </Pressable>

            <Pressable onPress={() => navigaiton.navigate('SignInScreen')} 
             style={{ 
                height: 50,
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30

                }}>
                <Text style={{ color: '#e94350', fontSize: 18 }}>Already have an account ? Sign In</Text>
            </Pressable>




        </View>
    )
}

export default SignUpScreen
