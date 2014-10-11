$(document).ready(function() {
  jsonStubOfMessages = [{content: "Hello", latitude: 37, longitude: 122}, {content: "Yo", latitude: 40, longitude: 150}, {content: "Sup", latitude: 30, longitude: 120}]
  MessageFactory.createMessages(jsonStubOfMessages)
});