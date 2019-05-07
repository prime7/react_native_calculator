import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

export default class App extends Component {
    state = {
        result: "",
        display: ""
    };
    handle = operation => {
        if (operation === "C") {
            this.clear();
        } else if (operation === "=") {
            this.calculate();
        } else {
            this.setState({ display: this.state.display + operation });
        }
    };

    clear() {
        this.setState({ display: "", result: "" });
    }
    calculate() {
        const display = this.state.display;
        let result;
        try {
            let fixedOperation = display.split("x").join("*");
            fixedOperation = fixedOperation.split("÷").join("/");
            result = new String(eval(fixedOperation)).toString();
        } catch (e) {}
        this.setState({ result, display });
    }
    render() {
        return (
            <View style={styles.container}>
                <Screen
                    style={styles.screen}
                    result={this.state.result}
                    display={this.state.display}
                />
                <Buttons style={styles.button} press={this.handle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        backgroundColor: "#141D25"
    }
});
