class Asset < ActiveRecord::Base
  mount_uploader :file, AssetUploader
end
