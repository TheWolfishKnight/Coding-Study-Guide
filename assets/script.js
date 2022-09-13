var topics = ['HTML','CSS','Git', 'Javascript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for(var x = 0; x < topics.length; x++) {
        console.log (topics[x]);
}}


function selectTopic() {
    if (randomTopic === 'CSS'){
    console.log("CSS makes it pretty, dawg, let's learn to paint 'sites!");
}   else if (randomTopic === 'Git'){
    console.log ("Git is the flow of the code, give into the current");
}   else if (randomTopic === 'Javascript'){
    console.log ("Javascript makes the clicks click, get on it!");
}   else if (randomTopic === 'HTML'){
    console.log("HTML moves the nation, let's get hyper- marked up in the station.");
}   else {
    console.log ('What the hell are you saying? Try again fool!');
}}
console.log ("This is what the pre-work went over:");

listTopics()

console.log ("'Aight, check it; this is my recommendation:")
selectTopic()