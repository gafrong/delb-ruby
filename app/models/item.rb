class Item < ActiveRecord::Base
  belongs_to :user
  # mount_uploader :image, ImageUploader
  has_attached_file :image, :styles => { :medium => "200x", :thumb => "100x100"}, :path => ":rails_root/public/images/uploads/:filename", default_url => "delb.png"

  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
