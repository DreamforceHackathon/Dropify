require 'carrierwave/orm/activerecord'

class Picture < ActiveRecord::Base
  mount_uploader :picture, PictureUploader
end