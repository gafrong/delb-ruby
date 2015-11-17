class CreateUserxes < ActiveRecord::Migration
  def change
    create_table :userxes do |t|
      t.string :name
      t.attachment :avatar
      t.string :avatar_path

      t.timestamps null: false
    end
  end
end
