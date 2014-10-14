class PicturesController < ApplicationController
  def create
    message = Message.find(session[:message_id])
    message.pictures.delete_all
    @picture = message.pictures.new(picture_params)

    if @picture.save
      respond_to do |format|
        format.html
        format.js
      end
    else
      render nothing: true
    end
  end

  def clear_all
    message = Message.find(session[:message_id])
    message.pictures.delete_all
    render nothing: true
  end

  private
  def picture_params
    params.require(:picture).permit(:picture)
  end
end