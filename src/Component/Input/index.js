import React, { Component } from 'react';
import { View, TextInput, Animated } from 'react-native';
import { styles } from '../styles';
import { withTheme } from '../../Theme';


 class FloatingLabelInput extends Component {
    state = {
        isFocused: false,
    };
    UNSAFE_componentWillMount() {
        this._animatedIsFocused = new Animated.Value(this.props.value === '' ? 0 : 1);
    }
    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    componentDidUpdate() {
        Animated.timing(this._animatedIsFocused, {
            toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
            duration: 200,
						useNativeDriver: false
        }).start();
    }
    componentWillUnmount() {
        this._animatedIsFocused.removeAllListeners()
    }
    render() {
        const { value, updateData, theme,hide, title, label, ...props } = this.props;
        const { isFocused } = this.state;

        const animatedLabelStyle = {
            top: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [18, 0],
            }),
            fontSize: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 12],
            }),
            color: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: ['#888', '#0080FF'],
            }),
        };
        return (
            <>
                <View >
                    <Animated.Text style={[styles.labelStyle, animatedLabelStyle]}>
                        {label}
                    </Animated.Text>

                    <TextInput
                        {...props}
                        style={{ width: 500, height: 30, fontSize: 16 }}
                        onChangeText={this.props.updateData}
                        value={this.props.value}
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                        blurOnSubmit
                        secureTextEntry={this.props.hide}
                        keyboardType={this.props.title}
                        underlineColorAndroid="transparent"

                    />
                </View>
            </>
        )

    }
}

// export default withTheme(FloatingLabelInput);
export default FloatingLabelInput;