class CommentsController < ApplicationController
  def create
    message = Message.find(params[:message_id])
    message.comments.create(content: params[:content], user_id: current_user.id)
    render nothing: true
  end
end