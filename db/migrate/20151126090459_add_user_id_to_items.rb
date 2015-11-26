class AddUser_idToItems < ActiveRecord::Migration
  def change
    add_column :items, :userID, :integer
  end
end
