class PicturesController < ApplicationController
  def create
    message = Message.find(session[:message_id])
    picture = message.pictures.new(picture_params)

    if picture.save
      session[:message_id] = nil
      redirect_to root_path
    else
      render nothing: true
    end
  end

  private
  def picture_params
    params.require(:picture).permit(:picture)
  end
end