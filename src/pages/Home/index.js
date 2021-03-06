import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { styles } from './styled'

import List from '../../components/List'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Oficina <Icon name="wrench" size={25} /> App</Text>
                <View style={styles.listArea}>
                    <List />
                </View>
            </View>
        )
    }
}