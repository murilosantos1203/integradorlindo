import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    caixa: {
        width: '80%',
        borderRadius: 30,
        borderColor: '#ccc',
        padding: 8,
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        borderWidth: 1,
    },
    logomarca: {
        width: 200, 
        height: 100, 
        resizeMode: 'contain', 
        borderColor: 'black', 
        marginBottom: 20,
        marginLeft: 60
    },
    caixas: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    btnLogin: {
        color: 'white',
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 30,
        width: '40%',
        height: 50,
        backgroundColor: '#317176',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signInConteiner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textSign: {
        marginTop:20,
        fontSize: 17,
        color: 'white',
    },
    btnSignIn: {
        fontSize: 17,
        color: '#317176',
        margin: 10,
    },
    header: {
        alignItems: 'flex-start', // Alinha os itens à esquerda
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%', // Ajusta a largura do contêiner para 100% para cobrir toda a tela
        padding: 20, // Adiciona um pouco de padding para espaçamento
    },
});

export default styles;
