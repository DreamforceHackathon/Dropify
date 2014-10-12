require 'carrierwave/orm/activerecord'

class Picture < ActiveRecord::Base
  belongs_to :message
  mount_uploader :picture, PictureUploader
end