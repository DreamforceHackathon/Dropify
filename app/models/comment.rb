class Comment < ActiveRecord::Base
  has_many :votes, as: :voteable
  belongs_to :user
  belongs_to :message
end