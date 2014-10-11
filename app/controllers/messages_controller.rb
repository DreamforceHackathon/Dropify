class MessagesController < ApplicationController
  def index
    # all_messages = Message.all
    render json: Message.all.to_json
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end