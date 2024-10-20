import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar",
      ultimo: null,
    };

    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: "Iniciar" });
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({ botao: "Parar" });
    }
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: "Iniciar",
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Image
            source={require("./assets/cronometro.png")}
            style={styles.cronometro}
          />
          <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
          <View style={styles.btnArea}>
            <TouchableOpacity style={styles.btn} onPress={this.vai}>
              <Text style={styles.btnTexto}>{this.state.botao}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={this.limpar}>
              <Text style={styles.btnTexto}>Limpar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.areaUltimo}>
            <Text style={styles.textoTempo}>
              {this.state.ultimo > 0
                ? `Ultimo tempo: ${this.state.ultimo.toFixed(1)}s`
                : ""}
            </Text>
          </View>
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
    backgroundColor: "#00aeef",
  },
  timer: {
    marginTop: -160,
    color: "#fff",
    fontSize: 65,
    fontWeight: "bold",
  },
  btnArea: {
    flexDirection: "row",
    marginTop: 80,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    margin: 18,
    borderRadius: 8,
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00aeef",
    textTransform: "uppercase",
  },
  areaUltimo: {
    marginTop: 40,
  },
  textoTempo: {
    fontSize: 25,
    fontStyle: "italic",
    color: "#fff",
  },
});

export default App;
