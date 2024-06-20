import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {

   
    },
    btn: {
      width: '100%',
      height: 80,
      backgroundColor:"#fff",
      alignItems: 'center',
      justifyContent: 'center'
    },
    map: {
  
      marginBottom: 10,
      marginTop: 30,
      width: width - 30,
      height: height / 2.2,
      borderRadius: 10,
    },
    button: {
      width: "70%",
      height: 40,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      color: 'white'
    },
    cxs: {
      // backgroundColor: '#f00',
      width: '80%'
    },
    cx: {
    backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 8,
      borderWidth: 1,
      padding: 5,
      borderColor: '#ccc',
      borderRadius: 20,
    },
    cxTxt: {
      fontSize: 12,
      backgroundColor: 'white'
    },
    title:{
      fontSize: 16,
      marginBottom: 2
    
    },
    logomarca: {
      marginTop:80,
      marginLeft:30,
      width: 150, 
      height: 60, 
      resizeMode: 'contain', 
      borderColor: 'black',


    },
    header: {
      backgroundColor: 'white',
        height: 160,
    },
    itens: {

      alignItems:"center"
    }
   
  });
  
  export default styles