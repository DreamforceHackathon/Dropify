class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content, null: false, limit: 220
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.belongs_to :user

      t.timestamps
    end
  end
end
