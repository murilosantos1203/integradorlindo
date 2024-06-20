import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  formulario: {
    width: '100%',
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  campo: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  mensagem: {
    color: 'red',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: '#317176',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    borderRadius: 200,
    marginBottom: 10,
  },
  logomarca: {
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
    borderColor: 'black', 
    marginBottom: 20,
    marginLeft: 60
}
});

export default styles;