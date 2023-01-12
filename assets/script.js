var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

for (var x = topics.length - 1; x >= 0; x--) {
    console.log(topics[x]);
}

for (var topic of topics) {
    console.log(topic);
}

topics.length
