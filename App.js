
import React, { useState } from "react";

import { StyleSheet,  Text, View, Image, Button } from "react-native";


export default function App() {
  const [par, setpar] = useState(0);
  const [res1, setres1] = useState("");
  const [flag, setflag] = useState(0);
  
  const Par = () => {
    setflag(1);
    setpar(par + 2);
    setres1(res1 + par + " ( ͡❛ ͜ʖ ͡❛) ");
  };
  
  const [fibo1, setfibo1] = useState(0);
  const [fibo2, setfibo2] = useState(1);
  const [res2, setres2] = useState("0");
  
  const Fibo = () => {
    setflag(2);
    
    setfibo2(parseInt(fibo1) + parseInt(fibo2));
    setfibo1(fibo2);
    
    
    setres2(res2 + " (ง︡'-'︠)ง " + fibo2);
  };
  
  const [fact, setfact] = useState(1);
  const [res3, setres3] = useState("");
  const [temp, settemp] = useState(1);
 

  const Fact = () => {
    setflag(3);
    
    setfact(fact + 1);
   

    settemp(temp * fact);
    setres3(res3 + " ʕ•́ᴥ•̀ʔっ " + temp);
  };

  return (
    <View style={styles.fondo}>
      <View>
      <Image source={{uri: 'https://matthews.sites.wfu.edu/misc/graphics/ResVsComp/50percent36x2.png'}}/>
      </View>
      <View style={styles.titulo}>
        <Text style={styles.title}>Series GarraGaming</Text>
        <Text style={styles.title}>Eder Elvisable</Text>
        <Text style={styles.title}>DiegoCancho</Text>
      </View>
      <Text style={styles.letra}>
        {flag == 1
          ? res1
          : flag == 2
          ? res2
          : res3}
      </Text>
      <View style={styles.boton}>
      <Button title="Pares"  onPress={Par} color="F641E8" ></Button>
      <Button title="Fibonacci" onPress={Fibo} color="F641E8" ></Button>
      <Button title="factorial" onPress={Fact} color="F641E8"></Button></View>
      


    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    backgroundColor: "pink",
    alignItems: "stretch",
    justifyContent: "flex-start",
    width: 450,
    height: 150,
    },
  title: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  letra: {
    fontSize: 30,
    padding: 50,
  },
  fondo: {
    backgroundColor: "purple",
  },
  boton: {
    justifyContent: "space-between",
  },
});
