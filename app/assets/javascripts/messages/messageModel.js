function Message(args) {
  this.content = args.content;
  this.latitude = args.latitude;
  this.longitude = args.longitude;
}

MessageStore = {
  messages: []
}