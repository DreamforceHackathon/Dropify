class PicturesController < ApplicationController
  def create
    p params[:file]

    render nothing: true
  end
end