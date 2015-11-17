class AddAttachmentAvatarToRenees < ActiveRecord::Migration
  def self.up
    change_table :renees do |t|
      t.attachment :avatar
    end
  end

  def self.down
    remove_attachment :renees, :avatar
  end
end
