import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.result}</Text>
                <Text style={styles.display}>{this.props.display}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1C2936",
        flex: 0.3,
        justifyContent: "space-around",
        paddingHorizontal: 24
    },
    text: {
        textAlign: "right",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 40
    },
    display: {
        textAlign: "right",
        color: "#fff",
        fontSize: 20
    }
});
