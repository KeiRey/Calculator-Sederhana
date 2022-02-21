import React, {Component} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasil: 0,
      hitung: 0,
    };
  }

  masukanAngka = (value) => {
    if(this.state.hitung == 0)
    {
      this.setState({ hitung:value })
    }else{
      this.setState({ hitung:this.state.hitung + '' + value })
    }
  }

  hitungHasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({ hitung: hasil })
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#212121" barStyle="light-content" />

        <View
          style={{flex: 0.5, justifyContent: 'center', marginHorizontal: 10}}>
          <Text
            style={{
              color: '#fff',
              fontSize: 48,
              textAlign: 'right',
            }}>
            {this.state.hitung}
          </Text>
        </View>

        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.setState({hitung: 0})}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'right',
                  padding: 10,
                  margin: 10,
                }}>
                Clear
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('(')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                (
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(')')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                )
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('/')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                /
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('%')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                %
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(7)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                7
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(8)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                8
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(9)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                9
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('*')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                x
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(4)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                4
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(5)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                5
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(6)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                6
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('+')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(1)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(2)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(3)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('-')}>
              <Text
                style={{
                  color: '#ff5722',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                -
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View
              style={{flex: 1, justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                🤭
              </Text>
            </View>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka(0)}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                0
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.masukanAngka('.')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                .
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center'}}
              onPress={() => this.hitungHasil()}>
              <Text
                style={{
                  color: '#76ff03',
                  fontSize: 24,
                  textAlign: 'center',
                  padding: 10,
                }}>
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
