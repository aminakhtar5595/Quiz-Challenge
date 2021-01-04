import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AntDesign } from '@expo/vector-icons';

export default class QuestionFifteen extends React.Component {
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
                    }}>Questions 15 of 20</Text>

                    <Text style={{
                        fontSize: 14, color: 'gray'
                    }}>Entertainment: Television</Text>

                    <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                        <AntDesign name="star" size={18} color="black" />
                        <AntDesign name="star" size={18} color="black" />
                        <AntDesign name="star" size={18} color="black" />
                        <AntDesign name="staro" size={18} color="black" />
                        <AntDesign name="staro" size={18} color="black" />
                    </View>
                </View>

                <Text style={{
                    fontSize: 20, paddingBottom: 60
                }}>Which of these voices wasn't a choice for the House AI in The Simpsons Treehouse of Horror short House of Whacks?</Text>
                
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
                        '#000' }}>Matthew Perry</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: 
                        this.state.right == true || this.state.wrong == true ? '#000' : 
                        '#E5E6E5',
                        width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1
                    }}
                    onPress={() => this.setState({ right: true, wrong: false })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center', 
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#fff' : 
                        '#000' }}>George Clooney</Text>
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
                        '#000' }}>Dennis Miller</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: '#E5E6E5', width: '45%', paddingHorizontal: 10, paddingVertical: 10,
                        borderRadius: 5, borderWidth: 1,
                        backgroundColor: 
                        this.state.right == true ? '#F5F5F5' : 
                        this.state.wrong == true ? '#F5F5F5' : '#E5E6E5',
                        borderColor: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000',
                    }} onPress={() => this.setState({ right: false, wrong: true })}
                    disabled={this.state.right == true || this.state.wrong == true ? true : false}>
                        <Text style={{ textAlign: 'center', 
                        color: 
                        this.state.right == true || this.state.wrong == true ? '#A3A3A3' : 
                        '#000' }}>Pierce Brosnan</Text>
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
                    }} onPress={() => Actions.question_sixteen()}>
                        <Text style={{ textAlign: 'center', color: '#000' }}>Next Question</Text>
                    </TouchableOpacity>
                    :
                    null
                }
            </View>
        )
    }
}