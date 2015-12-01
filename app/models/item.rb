class Item < ActiveRecord::Base
  belongs_to :user
  # mount_uploader :image, ImageUploader
  has_attached_file :image, :path => ":rails_root/public/images/uploads/:filename"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
