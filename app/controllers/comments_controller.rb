class CommentsController < ApplicationController
  def create
    message = Message.find(params[:message_id])
    comment = message.comments.create(content: params[:content], user_id: current_user.id)
    render :partial => 'comments/comment', locals: {comment: comment}
  end
end