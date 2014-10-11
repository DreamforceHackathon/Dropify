class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :content, limit: 220
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
