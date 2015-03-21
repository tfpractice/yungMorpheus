class Dataset < ActiveRecord::Base
  belongs_to :article, polymorphic: true
  mount_uploader :data, DataUploader

end
