import english_words from "../data/english.json" assert{type: "json"};
import spanish_words from "../data/spanish.json" assert{type: "json"};

export function identify_english_words({words}){
    let english_words_in = [];

    words.forEach( word => {
        if(english_words.words.includes(word)){
            english_words_in = [...english_words_in, word.toLowerCase()];
        }
    });

    return english_words_in;
}

export function identify_spanish_words({words}){
    let spanish_words_in = [];

    words.forEach( word => {
        if(spanish_words.words.includes(word)){
            spanish_words_in = [...spanish_words_in, word.toLowerCase()];
        }
    });

    return spanish_words_in;
}

export function determinate_language({spanish_words, english_words}){

    if(spanish_words.length > 0 && english_words.length <= 0){
        return "spanish";
    }

    if(spanish_words.length <= 0 && english_words.length > 0){
        return "english";
    }

    if(spanish_words.length > 0 && english_words.length > 0){
        return "spanglish";
    }

    return "language not found";
}

