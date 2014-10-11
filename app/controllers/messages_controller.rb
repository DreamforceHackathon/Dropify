class MessagesController < ApplicationController
  def index
    # all_messages = Message.all
    render json: Message.all.to_json
  end

  def create
    new_message = Message.new(content: params[:content], latitude: params[:lat], longitude: params[:long])

    if new_message.save
      render json: new_message.to_json
    else
      render json: {errors: new_message.errors}.to_json
    end
  end

  def show
    message = Message.find(params[:id])
    if message
      render json: message.to_json
    else
      render json: {errors: message.errors}.to_json
    end
  end

  def update
    message = Message.find(params[:id])
    #assuming params
    if message.update_attributes(params[:message])
      render json: message.to_json
    else
    #can render different messages
      render json: {errors: message.errors}.to_json
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
end