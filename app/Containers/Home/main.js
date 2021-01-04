import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay'

export default class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 2000);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff'
            }}>
                <Spinner visible={this.state.loading} color='#2FA1E1' />
                <View style={{
                    paddingHorizontal: 20,
                }}>
                    <View style={{
                        paddingBottom: 20
                    }}>
                        <Text style={{
                            fontSize: 16, textAlign: 'center'
                        }}>Click Here To Start</Text>
                    </View>

                    <TouchableOpacity style={{
                        backgroundColor: '#2FA1E1', paddingHorizontal: 20, paddingVertical: 15, borderRadius: 5
                    }} onPress={() => Actions.questions()}>
                        <Text style={{
                            fontSize: 16, color: '#fff'
                        }}>Start your Quiz</Text>
                    </TouchableOpacity>
                </View>
                </View>
        )
    }
}