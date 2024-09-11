import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet } from 'react-native';

const PasswordGenerator = () => {
    const [length, setLength] = useState(12);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState('');

    const generatePassword = () => {
        let charset = '';
        if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeNumbers) charset += '0123456789';
        if (includeSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
        
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatedPassword += charset[randomIndex];
        }
        setPassword(generatedPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>PASSWORD GENERATOR</Text>
            <View style={styles.row}>
                <Text style={styles.label}>Password length</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={length.toString()}
                    onChangeText={text => setLength(parseInt(text))}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Include lower case letters</Text>
                <Switch
                    value={includeLowercase}
                    onValueChange={setIncludeLowercase}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={includeLowercase ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Include upper case letters</Text>
                <Switch
                    value={includeUppercase}
                    onValueChange={setIncludeUppercase}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={includeUppercase ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Include numbers</Text>
                <Switch
                    value={includeNumbers}
                    onValueChange={setIncludeNumbers}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={includeNumbers ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <View style={styles.switchContainer}>
                <Text style={styles.label}>Include special symbols</Text>
                <Switch
                    value={includeSymbols}
                    onValueChange={setIncludeSymbols}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={includeSymbols ? '#f5dd4b' : '#f4f3f4'}
                />
            </View>
            <Button title="GENERATE PASSWORD" onPress={generatePassword} />
            <View style={styles.resultContainer}>
                <Text style={styles.password}>{password}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#23235B',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 100,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    label: {
        color: '#FFFFFF',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingHorizontal: 10,
        color: '#fff',
        width: 100,
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    password: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: '#151537', 
        padding: 10,
        borderRadius: 5,
    },
    resultContainer: {
        marginTop: 20,
        padding: 0,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#333',
        borderRadius: 0,
    },
});

export default PasswordGenerator;
