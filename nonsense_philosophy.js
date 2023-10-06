//Define the aura colors and phrases as an object
const auras = {
    "green": "Are you feeling envious of something?", 
    "red": "Well aren't we fiery today?", 
    "blue": "Super calm, super zen", 
    "purple": "Dignity and grace are your guiding lights today", 
    "yellow": "So bright and sunny, the optimism is infectious!"
}; 

//Define the meaningless philosophical questions to pose as an array
const meaninglessQuestions = [
    "If a tree falls in a forest and no one is around to hear it, does it make a sound?",
    "Is the universe just a simulation created by advanced beings?",
    "What is the meaning of life, the universe, and everything?",
    "Can a computer or AI ever possess true consciousness?",
    "Do we have free will, or are our actions predetermined?",
    "If a person's identity changes over time, are they still the same person?",
    "Can something be both true and false at the same time?",
    "Is time travel possible, and if so, what are its implications?",
    "What is the nature of reality? Is everything an illusion?",
    "Does God exist, and if so, what is the nature of God?"
];

//Define the generic wisdom to output based on none of the above as an array
const genericWisdom = [
    "Actions speak louder than words.",
    "The only constant in life is change.",
    "It's better to give than to receive.",
    "Happiness is a choice, not a result.",
    "Success is a journey, not a destination.",
    "Forgiveness is the key to inner peace.",
    "The past is behind you; learn from it, but don't dwell on it.",
    "Kindness costs nothing but means everything.",
    "Life is what happens when you're busy making other plans.",
    "Believe in yourself; you are stronger than you think."
];

//Random number generator to use across the pulls
function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
};

//Define the random question to pose
const randQuest = generateRandomNumber(meaninglessQuestions.length)


//Define the random wisdom to provide
const randWisd = generateRandomNumber(genericWisdom.length)


console.log(meaninglessQuestions[randQuest]);
console.log(genericWisdom[randWisd]);