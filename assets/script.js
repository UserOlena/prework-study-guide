var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() { 
    for (var x = 0; x < topics.length; x++) {
        console.log(topics[x]);
    }
}

let selectTopic = () => {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

console.log('Here are the topics we learned through Prework:');
listTopics();
console.log('Which topic should we study first?');
selectTopic();


/*
function listTopics() { 
    const x = Math.floor(Math.random() * topics.length);
    return topics[x];
}


let selectTopics = (y) => {
    if (y === 'HTML') {
        console.log("Let's study HTML!");
      } else if (y === 'CSS') {
        console.log("Let's study CSS!");
      } else if (y === 'Git') {
        console.log("Let's study Git!");
      } else if (y === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
}

console.log()
selectTopics(listTopics());
8/

/*
for (var topic of topics) {s
    console.log(topic);
}
*/
