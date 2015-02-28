class Article < ActiveRecord::Base
  belongs_to :section, polymorphic: true
  belongs_to :serial, polymorphic: true
  mount_uploader :header, HeaderUploader

end
