import React, { Component } from "react";
import { View, StyleSheet, SafeAreaView, Alert } from "react-native";
import Button from "./Button";

export default class Buttons extends Component {
    buttonPressed = item => {
        this.props.press(item);
    };
    render() {
        const numbers = [
            ["7", "8", "9"],
            ["4", "5", "6"],
            ["1", "2", "3"],
            [".", "0", "="]
        ];
        const operations = ["C", "÷", "x", "-", "+"];
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.numbers}>
                    {numbers.map((row, i) => (
                        <View key={i} style={styles.row}>
                            {row.map(char => (
                                <Button
                                    key={char}
                                    value={char}
                                    handlePress={() => this.buttonPressed(char)}
                                />
                            ))}
                        </View>
                    ))}
                </SafeAreaView>
                <SafeAreaView style={styles.operations}>
                    {operations.map(char => (
                        <Button
                            key={char}
                            value={char}
                            handlePress={() => this.buttonPressed(char)}
                        />
                    ))}
                </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#141D26",
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row"
    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    numbers: {
        flex: 3
    },
    operations: {
        flex: 1,
        backgroundColor: "#2778BE"
    }
});
