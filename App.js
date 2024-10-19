import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
      img: require("./assets/biscoito.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Grandes oportunidades surgem em pequenos momentos",
      "Acredite no poder dos seus sonhos",
      "A sorte favorece os ousados",
      "Seu potencial é maior do que você imagina",
      "A persistência é o caminho para o sucesso",
      "Um sorriso abre portas onde quer que você vá",
      "Boas coisas vêm para quem sabe esperar",
      "Você é a chave para o seu próprio sucesso",
      "Hoje é um bom dia para começar algo novo",
      "O futuro pertence àqueles que acreditam nele",
      "Sua força interior é sua maior aliada",
      "Cada desafio é uma oportunidade disfarçada",
      "Confie nos seus instintos, eles conhecem o caminho",
      "Seu esforço será recompensado em breve",
      "Uma mente em paz atrai sucesso",
      "O universo conspira a favor de quem faz a sua parte",
      "Seja a mudança que você quer ver no mundo",
      "O sucesso está ao alcance daqueles que se dedicam",
      "A cada dia você está mais perto do seu objetivo",
      "Grandes jornadas começam com um pequeno passo",
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: `"${this.frases[numeroAleatorio]}"`,
      img: require("./assets/biscoitoAberto.png"),
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image source={this.state.img} style={styles.img} />
          <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
          <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
            <View style={styles.btnArea}>
              <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

export default App;
