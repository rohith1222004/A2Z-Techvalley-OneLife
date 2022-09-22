
import { Pressable, StyleSheet, Text, View } from 'react-native';

const Btn = ({content}) =>{
  return (
    <View style={styles.container}>
      <View>
          
            <View style={styles.btn}>
              <Text style={{color:'white',fontSize:19, fontWeight: '700'}}>{content}</Text>
            </View>
          
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  btn:{
    backgroundColor:'black',
    width:350,
    height:60,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  }
});

export default Btn;