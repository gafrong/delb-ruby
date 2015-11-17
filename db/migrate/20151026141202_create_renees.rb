class CreateRenees < ActiveRecord::Migration
  def change
    create_table :renees do |t|
      t.string :name
      t.string :avatar
      t.string :avatar_path

      t.timestamps null: false
    end
  end
end
