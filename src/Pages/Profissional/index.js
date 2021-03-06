import React from "react";
import { View, Text, ScrollView, StyleSheet,TouchableOpacity,Linking, Image} from "react-native";
import {StatusBar} from 'expo-status-bar'
import Button from "../../components/Button";
import Footer from '../../components/Footer'

const Profissional = (props) => {
  return (
    <View>
      <Button navigation={props.navigation} />
      <StatusBar hidden />
      <View style={styles.container}>
        
        <Image style={styles.imagem} source={require("./images/profissionais.png")}></Image>
        <Text style={styles.textTitulo}> <h2>Informações aos Profissionais </h2>
         <p>Aqui você vai encontrar orietações sobre a entrega voluntária aos profissionais independente da ocupação na rede de atendimento.</p> </Text>
        <ScrollView>
          <Text style={styles.textTitulo2}> Onde Buscar Atendimento
         </Text>
          <Text style={styles.textTexts}>
              
           Algo fundamental para o Programa é que todos os profissionais, independentemente do local que ocupam na rede de atendimento, 
               assumam seu papel no atendimento à gestante, com competência técnica, conhecimento teórico e compromisso ético para realizar 
               as reflexões, orientações e encaminhamentos necessários.{"\n"}{"\n"}

               O primeiro elemento que deve nortear a comunidade e os profissionais é o “olhar sensível” para a percepção da realidade. Caso contrário, pode ocorrer uma longa peregrinação por mainersos serviços, sem que seja dada a devida atenção à dúvida, desejo ou sofrimento da mulher. A sensação é de invisibilidade.{"\n"}{"\n"}
               O não julgamento é essencial para a criação de um vínculo de confiança entre a mulher e a rede.{"\n"}{"\n"}
               Os profissionais que recebem a informação por parte da gestante, sejam eles da Assistência Social (CRAS/CREAS) ou Saúde (UBS/UPAS), considerando serem essas as políticas mais acessadas pelas mulheres, devem comunicar, imediatamente, à vara da infância e juventude.{"\n"}{"\n"}
Os encaminhamentos não caracterizam transferência de responsabilidades, pelo contrário, o trabalho deverá se realizar, paralelamente, entre os serviços, conforme área de intervenção.<br></br><br></br>

Muitos profissionais deixam de encaminhar ao Programa Entrega Legal por perceberem que as mulheres estão muito confusas, ambivalentes e inseguras. Essa dúvida da gestante é perfeitamente normal e compreensível. Vale ressaltar que não é necessária a convicção da mulher quanto à decisão da entrega do bebê para adoção para que seja encaminhada ao Programa Entrega Legal. Contudo, a Lei exige o seu encaminhamento como imediato, ou seja, que a gestante possa ser atendida pelo Programa o mais cedo possível, após manifestar a intenção pela entrega. {"\n"}{"\n"}

É importante ressaltar que, quanto mais precocemente a gestante é encaminhada para o Programa, maiores serão suas oportunidades para aprofundamento das reflexões sobre a tomada de uma decisão consciente e refletida o encaminhamento deve ser feito diretamente e com celeridade à vara da infância e juventude, do local de moradia da gestante.{"\n"}{"\n"}

<h3>Veja os pontos aos quais todos os profissionais envolvidos devem ficar atentos:</h3>

    <ul>
          <li>Uma postura não julgadora e não preconceituosa de todos os agentes que vierem a atender a mulher; </li>
          <li>conhecimento dos diversos serviços que podem ser envulvidos no atendimento;</li>
          <li>articulação entre esses serviços para garantir rapidez no atendimento, visando não prejudicar a criança, além de canais de comunicação entre os diversos setores;</li>
          <li>conhecimento sobre as consequências da decisão de entrega da criança e das diferenças entre entrega e abandono;</li>
          <li>respeito aos direitos da mulher e da criança, bem como de terceiros envolvidos, sobretudo aos do suposto genitor e de membros da família extensa.</li>
    </ul>

    <b>A entrega do recém nascido à adoção não é crime, ao contrário, é direito.</b> Assim, todos os profissionais qualificados ao atendimento dessa demanda devem combater atitudes de criminalização e colaborar para a construção de uma nova cultura, em que a mulher seja vista como sujeito de direitos e sujeito da própria história.  
    {"\n"}{"\n"}
         <b>Para garantir o direito da gestante de ser atendida prontamente pela Vara da Infância e Juventude, o Estatuto da Criança e do Adolescente prevê uma multa de R$ 1.000,00 a R$ 3.000,00 para o médico, enfermeiro, dirigente de estabelecimento de saúde, funcionário de programa oficial ou comunitário destinado à garantia do direito à convivência familiar que deixar de, imediatamente, encaminhar à autoridade judiciária caso de que tenha conhecimento, envolvendo mãe ou gestante interessada em entregar seu filho para adoção. (ECA, art. 258-B). </b>

          </Text>
          <Text style={styles.textTitulo2}> Aos profissionais da Saúde</Text>
          <Text style={styles.textTexts}>
              <ul>
          <li> É importante que o Judiciário comunique às maternidades de referência para que a equipe 
              multiprofissional se prepare para o acolhimento da gestante, principalmente com o objetivo 
              de respeitar o seu desejo de amamentar ou não, de conhecer ou não o bebê, após o nascimento, 
              bem como o tipo de parto mais adequado ao caso, conforme a condição física e emocional de cada
               mulher.</li>
            </ul>
          </Text>
          <Text style={styles.textTitulo2}> Aos profissionais da Assistência Social e Psicólogos</Text>
          <Text style={styles.textTexts}>
             <ul>
            <li>Um apoio importante para a gestante nesse período é seu acompanhamento psicológico na rede 
                de atendimento, o que ocorrerá apenas se ela considerar necessário e aceitar voluntariamente.
                 Por sua vez, os serviços de saúde precisam estar organizados para acolhimento dessa demanda.</li>{"\n"}
            <li>O apoio psicológico contribui de forma efetiva para o processo decisório da mulher.</li>{"\n"}
            <li> O assistente social ou o psicólogo que inicia os atendimentos da gestante ou puérpera apresentará 
                ao juiz da infância e juventude pelo menos dois relatórios, um no início e outro no final do trabalho 
                de acompanhamento da mulher que foi inserida ao Programa de Entrega Legal.</li> {"\n"}
            <li>Para organização de um trabalho integrado e qualificado, é importante a articulação com os demais 
                profissionais da rede socioassistencial envolvidos no atendimento, conforme particularidades de cada 
                área de atuação.</li> {"\n"}
            </ul>            
          </Text>

          <Text style={styles.textTitulo2}> Aos profissionais da Vara da Infância e Juventude</Text>
          <Text style={styles.textTexts}>
             <ul>
            <li>Já os profissionais que atenderão a gestante na vara da infância e juventude 
                (Psicólogo e Assistente Social) não devem exercer o papel de convencê-la a entregar 
                o filho em adoção, nem de persuadi-la a ficar com a criança.</li>{"\n"}

            </ul>            
          </Text>
          
    
        </ScrollView>
      </View>
     <Footer/>
    </View>
  );
};

export default Profissional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: '100vw',
    height: '40vh',
  },
  textTitulo: {
    fontSize:18,
    color: "#fff",
    backgroundColor: "#1aa488",
    textAlign:"center",
  },
  textTitulo2: {
    fontSize: 25,
    color: "rgb(255, 231, 109)",
    backgroundColor: "#da7ad6",
    textAlign:"center",
  },
  textTexts:{
      margin:5,
      backgroundColor: "rgb(255, 231, 109)",
      color:"rgb(149, 39, 144)",
      paddingLeft:"10px",
      paddingRight:"10px",
  },

});

