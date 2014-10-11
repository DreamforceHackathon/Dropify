class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :content, limit: 220
      t.belongs_to :user
      t.belongs_to :message
    end
  end
end
