import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    titulo1:{
        backgroundColor:'#f0f0f0',
        borderBottomWidth:4,
        borderColor: '#0174DF',
        paddingTop:10,
        fontWeight: 'bold',
        color:'#0174DF',
        fontSize:20
    },
    titulo2:{
        backgroundColor:'#f0f0f0',
        color:'#0174DF',
        fontSize:20
    },
    shortInput:{
        backgroundColor:'#f0f0f0',
        color:'#808080',
        borderRadius:8, 
        textAlignVertical: 'top',
        width:150,
        fontSize:20,
        height:30, 
        borderColor: 'gray',
        borderWidth: 1
    },
    totalFilde:{
        color:'#808080',
        fontSize:25
    },
    LongInput:{
        color:'#808080',
        borderRadius:8,
        fontSize:20, 
        textAlignVertical: 'top',
        width:600,
        height:80, 
        borderColor: 'gray', 
        borderWidth: 1 
    },
    sgoTitle:{
        fontSize: 40,
        justifyContent:'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color:'#0174DF'
    },
    title: {
        fontSize:40,
        backgroundColor: '#cdcdcd',
        alignItems: 'center',
        justifyContent: 'center',
        color:'#00008B'
    },
    titleText: {
        fontSize:80,
        justifyContent:'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color:'#0174DF'
    },
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    container2: {
        marginLeft:8,
        marginRight:8,
        backgroundColor: '#f0f0f0'
    },
    buttonView: {
        borderRadius:5,
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonAnteriorPOD: {
        borderRadius:5,
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#ff261b'
    },

    buttonPosteriorPOD: {
        borderRadius:5,
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#1df901'
    },

    buttonG: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
    },
    buttonP: {
        borderRadius: 10,
        color: '#0174DF'
    },
    mainView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdcdcd'
    },
    mainViewLimpaFormulario: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    },
    textInput: {
        backgroundColor: '#f0f0f0',
        height: 50,
        borderRadius: 3,
        width: 540,
        borderColor: 'gray',
        borderWidth: 1,
        fontSize:20,
        padding: 8        
    },     
    label: {
        fontSize:25,
        color:'#0174DF'
    },
    messageText: {
        color: 'red'
    },
    checkBox: {
        flex: 1,
        padding: 10
    },
    datePicker: {
        position: 'absolute',
        left: 0,
        top: 4,
        marginLeft: 0,
        marginLeft: 36
    },
    loadingContainer:{
        marginTop:250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    loadingText:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize:30,
        color:'#0174DF'
    },
    headerText:{
        color: 'white',
        width: 80,
        fontSize: 10
    },

    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdcdcd'
    },

    backgroundDadosMecanica: {
        backgroundColor: '#f0f0f0'
    },

    containerLogo: {
        paddingTop: 40,
        flex: 1,
        justifyContent: 'center'        
    },

    containerNovo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },

    
    btnSubmit: {
        backgroundColor: '#35aaff',
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
        
    },
    
    submitText: {
        color: '#fff',
        fontSize: 18
        
    },
    
    btnRetornar: {
        backgroundColor: '#35aaff',
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10,
    },
    
    retornarText: {
        color: '#fff',
        fontSize: 18,
    },
    
    inputArea: {
        flexDirection: 'row',
        width: '82%',
        backgroundColor: '#f0f0f0',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        //borderRadius: 7,
        padding: 10,
        height: 53,
        alignItems: 'center',
        borderWidth: 0.5
        
        
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,       
        color: '#222',
        fontSize: 18,
        borderRadius: 7,
        padding: 12
    },
    
    inputSenha: {
        backgroundColor: '#f0f0f0',
        width: '85%',
        height: 50,
        color: '#222',
        padding: 8,
        fontSize: 18
    },

    icon: {
        backgroundColor: '#f0f0f0',
        width:'15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnLogin: {
        paddingTop: 30
    },

    ViewPicker: {
        width: 200, 
        borderWidth: 0.5
    },
    ViewTime: {
        borderWidth: 0.5,
        width: 200,
        height: 50
    },

    tablePODMedicoes: {
        flexDirection: "row",
        height: 35
    },

    tablePODMedicoes1: {
        flexDirection: "row",
        height: 90
    },

    tableGridPODCol1: {
        textAlign: 'center',        
        fontSize: 14,
        color: '#ffffff'
    },

    tableGridPODCol2: {
        textAlign: 'justify',        
        fontSize: 14,
        color: '#ffffff'
    },

    tablePODCol1: {
        textAlign: 'center',        
        fontSize: 20,
        color: '#ffffff'
    },

    tablePODIntputEditable: {
        backgroundColor: '#ffffff',
        color: '#808080',
        borderRadius: 8, 
        textAlignVertical: 'center',
        width: '100%',
        fontSize: 20,
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'

    },

    tablePODMedicoesRow1: {
        backgroundColor: '#2196F3', 
        flex: 0.4,
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
    },

    tablePODMedicoesRow2: {
        backgroundColor: '#2196F3', 
        flex: 0.4,
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
    },

    tablePODMedicoesRow3: {
        backgroundColor: "white", 
        flex: 0.4,
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
    },

    tablePODMedicoesRow4: {
        backgroundColor: "#F97420", 
        flex: 0.4,
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
    },

    tablePODMedicoesRow5: {
        backgroundColor: "#F97420", 
        flex: 0.4,
        padding: 4,
        borderColor: 'gray',
        borderWidth: 1,
    },

    tablePODIntput3: {
        backgroundColor: '#f0f0f0',
        color: '#808080',
        borderRadius: 8, 
        textAlignVertical: 'center',
        width: '100%',
        fontSize: 20,
        height: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center'
    },

    botaoAdicionarAnteriorPOD: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    },

    botaoAdicionarPosteriorPOD: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0'
    }

});