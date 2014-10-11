class Message < ActiveRecord::Base
	validates_presence_of :content, :longitude, :latitude
	validates_length_of :content, maximum: 220
	
  belongs_to :user
  has_many :comments
  has_many :votes, as: :voteable
end