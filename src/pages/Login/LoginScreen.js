import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LoginScreen = ({ navigation }) => {
    const { login } = useAuth();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Catatanku</Text>
            <TextInput
                value={user}
                onChangeText={(text) => setUser(text)}
                placeholder={"Username"}
                style={styles.input}
            />
            <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder={"Password"}
                secureTextEntry={true}
                style={styles.input}
            />

            <Button
                title={"Login"}
                style={styles.input}
                onPress={() => login(user, password)}
            />
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
    },
    input: {
        width: 200,
        height: 45,
        padding: 10,
        borderWidth: 2,
        borderColor: "blue",
        marginBottom: 10,
    },
    header: {
        paddingLeft: 8,
        fontSize: 40,
        marginBottom:20,
        color: 'blue',
        fontStyle: 'italic',
        fontWeight: 'bold'
    },
});
