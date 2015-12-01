class RemoveImageUrl400FromItems < ActiveRecord::Migration
  def change
    remove_column :items, :image_url400, :text
  end
end
