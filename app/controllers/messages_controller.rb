class MessagesController < ApplicationController
  def index
    # all_messages = Message.all
    render json: Message.all
  end

  def create
    new_message = Message.new(content: params[:content], latitude: params[:latitude], longitude: params[:longitude])

    if new_message.save
      render json: new_message
    else
      render json: {errors: new_message.errors}
    end
  end

  def show
    message = Message.find(params[:id])
    if message
      render json: message
    else
      render json: {errors: message.errors}
    end
  end

  def update
    message = Message.find(params[:id])
    #assuming params
    if message.update_attributes(params[:message])
      render json: message
    else
    #can render different messages
      render json: {errors: message.errors}
    end
  end

  def destroy
    message = Message.find(params[:id])
    if message
      message.destroy
    else
      render json: {errors: "Message does not exist"}
    end
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