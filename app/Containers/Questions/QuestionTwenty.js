import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AntDesign } from '@expo/vector-icons';

export default class QuestionTwenty extends React.Component {
    constructor() {
        super()

        this.state = {
            right: false,
            wrong: false
        }
    }

    render() {
        return (
            <View style={{
                paddingVertical: 60, paddingHorizontal: 25
            }}>
                <View style={{ paddingBottom: 30 }}>
                    <Text style={{
                        fontSize: 25, paddingBottom: 5
                    }}>Questions 20 of 20</Text>

                    <Text style={{
                        fontSize: 14, color: 'gray'
                    }}>General Knowledge</Text>

                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <AntDesign name="star" size={18} color="black" />
                        <AntDesign name="star" size={18} color="black" />
                        <AntDesign name="staro" size={18} color="black" />
                        <AntDesign name="staro" size={18} color="black" />
                        <AntDesign name="staro" size={18} color="black" />
                    </View>
                </View>

                <Text style={{
                    fontSize: 20, paddingBottom: 60
                }}>In 2013 how much money was lost by Nigerian scams?</Text>
                
                <View style={{ flexDirection: 'row', width: '100%', paddingBottom: 40, justifyContent: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 
                        this.state.right == true || this.state.wrong == true ? '#000' : 
                        '#E5E6E5',
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1, marginRight: 10
                    }}
                    onPress={() => this.setState({ right: true, wrong: false })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center',
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#fff' : 
                        '#000' }}>2412.7 Billion</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: 
                        this.state.right == true ? '#F5F5F5' : 
                        this.state.wrong == true ? '#F5F5F5' : '#E5E6E5',
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1,
                        borderColor: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000',
                    }} onPress={() => this.setState({ right: false, wrong: true })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center',
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000' }}>2495 Million</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', width: '100%', paddingBottom: 40, justifyContent: 'center' }}>
                    <TouchableOpacity style={{
                        backgroundColor: 
                        this.state.right == true ? '#F5F5F5' : 
                        this.state.wrong == true ? '#F5F5F5' : '#E5E6E5',
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1, marginRight: 10,
                        borderColor: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000',
                    }} onPress={() => this.setState({ right: false, wrong: true })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center',
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000' }}>24956 Million</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: 
                        this.state.right == true ? '#F5F5F5' : 
                        this.state.wrong == true ? '#F5F5F5' : '#E5E6E5',
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1,
                        borderColor: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000',
                    }} onPress={() => this.setState({ right: false, wrong: true })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center',
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000' }}>242.7 Billion</Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.right == true ?
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>Correct!</Text>
                    </View> :
                    this.state.wrong == true ?
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ fontSize: 24, textAlign: 'center' }}>Wrong!</Text>
                    </View> :
                    null
                }

                {
                    this.state.right == true || this.state.wrong == true ?
                    <TouchableOpacity style={{
                        backgroundColor: '#E5E6E5', 
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1, marginTop: 20, alignSelf: 'center'
                    }} onPress={() => Actions.home()}>
                        <Text style={{ textAlign: 'center', color: '#000' }}>Quiz Completed</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
        )
    }
}