
const styles = StyleSheet.create({ 

    sensoresContainer: { 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    sensor: { 
        marginBottom: 20, 
        padding: 10, 
        backgroundColor: 'black', 
        borderRadius: 10, 
        width: '90%', 
        boxSizing: 'border-box', 
    }, 
    text: { 
        color: 'white', 
    }, 
    mapMarker: { 
        margin: 10, 
        color: '#DE013F', 
    }, 
    localizacao: { 
        backgroundColor: '#fff', 
        padding: 5, 
        marginTop: 5,
        borderRadius: 20, 
        display: 'flex', 
        alignItems: 'center', 
        width: '100%', 
        flexDirection: 'row', 
        color: '#000',
    }, 
    alinhar: { 
        alignItems: 'center', 
        justifyContent: 'center', 
    } ,
    logomarca: {
        marginTop:50,
        marginLeft:30,
        width: 150, 
        height: 60, 
        resizeMode: 'contain', 
        borderColor: 'black',
  
      },
    
      itensview: {
        flex: 1,
        marginTop: 20
      }
});

export default styles;
