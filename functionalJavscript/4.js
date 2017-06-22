function getShortMessages(messages) {
  // SOLUTION GOES HERE
  var array = messages.filter(function(message){
    return message['message'].length < 50;
  });

  return array.map(function(message){
    return message['message'];
  })

  console.log(array);
}

module.exports = getShortMessages
