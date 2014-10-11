class MessagesController < ApplicationController
  def index
  end

  def new
    @message = Message.new
    render :partial => 'new_message'
  end

  def create
    current_user.messages.create(content: params[:content])
    render nothing: true
  end
end