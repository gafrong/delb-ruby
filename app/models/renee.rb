class Renee < ActiveRecord::Base

  attr_accessible :name, :avatar_path, :avatar_path
  # has_attached_file :avatar, :path => ":rails_root/public/avatars/:filename"
  has_attached_file :file_attachment, s3_permissions: private

  validates_attachment_content_type :file_attachment,
                                  content_type: ["image/jpeg", "image/png"]
end
