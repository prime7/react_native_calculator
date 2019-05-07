import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

export default class Button extends Component {
    render() {
        const { value } = this.props;
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.handlePress(value)}
            >
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        color: "#fff",
        fontSize: 30
    }
});
