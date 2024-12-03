import {useState} from 'react';
import {  Text, View, StyleSheet, SafeAreaView, TouchableHighlight, TextInput} from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';



export default function App() {
  const [email, onChangeEmail] = useState('Email');
  const [password, onChangeText2] = useState('Password');

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.pc}>
      <Text style={styles.paragraph}>
        SPACECRAFT
      </Text>
      </View>
       <TextInput 
               style={styles.textInput}
                    onChangeText={onChangeEmail}
                     placeholder={email}
                />
               <TextInput 
               style={styles.textInput2}
                onChangeText={onChangeText2}
                placeholder={password}
                />
                <TouchableHighlight 
                    onPress={() => { 
                        alert('YOU SERCHED SOMETHING!') 
                    }}
                >
                    <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Login
                        </Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.read}>
                Read Terms and conditions
                </Text>
                
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
     alignItems: 'center',
     height:550,
     width:300,
    backgroundColor: 'white',
    
    
  },
  
   pc: {
backgroundColor:'#6a5ae8',
justifyContent:'center',
 height:200,
    width:300,

  },
  paragraph: {
    
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
    marginLeft:20,
   
  },
 textInput: {
        borderWidth: 1,
        marginTop:10,
        height: 50,
        color:'black',
        marginRight:20,
        width:250,
        textAlign:'center',
    }, 
    textInput2: {
        borderWidth: 1,
        width:250,
        height: 50,
        color:'back',
         marginRight:20,
        marginTop: 25,
        textAlign:'center',
        
         },
   touchableButton1: {
      marginTop: 30,
        borderWidth: 1,
        margin:10,
        height: 40,
        
        borderColor:'black',
        width:190,
        textAlign:'center',
        marginRight:20,
        backgroundColor:'#6a5ae8',
        borderRadius:20,
         justifyContent: 'center'
      
   },
   buttonText: {
      textAlign:'center',
     color:'white',
    
   },
   read: {
     color:'grey',
     fontSize:10,
     marginRight:20,
     
   },
  
});
