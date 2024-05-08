import {identify_english_words, identify_spanish_words, determinate_language} from "./utils/utils.js";
import readline from "node:readline";

// const regex  = new RegExp(/^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/);
// const english_parragraph ="In today's fast-paced world, technology plays a pivotal role in our daily lives. From smartphones to social media platforms, we are constantly connected to a vast network of information and communication. The internet has revolutionized the way we access knowledge and interact with others, enabling seamless global connectivity. Whether it's browsing the web for news updates or staying connected with friends and family through messaging apps, technology has become an indispensable part of modern existence.";
// var spanish_paragraph = "En el mundo actual, caracterizado por su ritmo acelerado, la tecnología desempeña un papel fundamental en nuestra vida cotidiana. Desde los teléfonos inteligentes hasta las plataformas de redes sociales, estamos constantemente conectados a una vasta red de información y comunicación. Internet ha revolucionado la forma en que accedemos al conocimiento e interactuamos con otros, permitiendo una conectividad global sin problemas. Ya sea navegando por la web en busca de noticias o manteniéndonos en contacto con amigos y familiares a través de aplicaciones de mensajería, la tecnología se ha convertido en una parte indispensable de la existencia moderna.";

const options = {input: process.stdin, output: process.stdout}
const input = readline.createInterface(options);

input.question("Type the text", (text)=>{
    const language = identify_language(text);

    console.log(`The language is: ${language}`);
    input.close();
});

function identify_language(text){
    let english_words, spanish_words;
    
    if(typeof text === "string"){
        const words = text.toLowerCase().trim().split(" ");
        english_words = identify_english_words({words: words});
        spanish_words = identify_spanish_words({words: words});
        const language = determinate_language({spanish_words: spanish_words, english_words: english_words});

        return language;
    }else{
        return "Type a text"
    }
}



