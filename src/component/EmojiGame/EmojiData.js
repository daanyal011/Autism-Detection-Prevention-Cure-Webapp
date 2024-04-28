import IMG1 from "../../assets/happy.png"
import IMG2 from "../../assets/Scared.png"
import IMG3 from "../../assets/Shocked.png"
import IMG4 from "../../assets/angry.png"
import IMG5 from "../../assets/crying.png"
import IMG6 from "../../assets/laughing.png"
import IMG7 from "../../assets/sleepy.png"
import IMG8 from "../../assets/thinking.png"

export const EmojiData = [
    {
        image: IMG1,
        options:[ "laughing", "sleepy", "happy", "Shocked"],
        answer: 3
    },
    {
        image: IMG2,        
        options:["happy", "Scared", "sleepy", "laughing"],
        answer: 2
    },
    {
        image: IMG3,
        options: ["Shocked", "happy", "thinking", "laughing"],
        answer: 1
    },
    {
        image: IMG4,
        options: ["thinking", "Scared", "sleepy", "angry"],
        answer: 4
    },
    {
        image: IMG5,
        options: ["angry", "laughing", "Shocked", "crying"],
        answer: 4
    },
    {
        image: IMG6,
        options: ["sleepy", "laughing", "crying", "Scared"],
        answer: 2
    },
    {
        image: IMG7,
        options: ["crying", "happy", "sleepy", "laughing"],
        answer: 3
    },
    {
        image: IMG8,
        options: ["Shocked", "angry", "thinking", "happy"],
        answer: 3
    },
];