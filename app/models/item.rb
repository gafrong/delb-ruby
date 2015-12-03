class Item < ActiveRecord::Base
  belongs_to :user
  # mount_uploader :image, ImageUploader
  has_attached_file :image,
    storage: :s3,
    s3_credentials: {
      access_key_id: ENV["AWS_ACCESS_KEY_ID"], 
      secret_access_key: ENV["AWS_SECRET_ACCESS_KEY"],
      bucket: "delbfiles"
      },
    path: ":filename"
# , :path => ":rails_root/public/images/uploads/:filename", default_url => "delb.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
