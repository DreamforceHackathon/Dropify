class AddTitleAndUrlAndAdvertToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :title, :string
    add_column :messages, :url, :string
    add_column :messages, :advert, :string, default: false
  end
end
