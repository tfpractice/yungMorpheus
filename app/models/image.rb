class Image < ActiveRecord::Base
  belongs_to :article, polymorphic: true
  mount_uploader :img, ImgUploader
end
