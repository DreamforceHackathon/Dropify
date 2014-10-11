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
    message = Message.find(params[:message_id])
    
  end

  def edit
  end

  def update
  end

  def destroy
  end
end