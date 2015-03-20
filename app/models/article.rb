class Article < ActiveRecord::Base
  belongs_to :section, polymorphic: true
  belongs_to :serial, polymorphic: true
  mount_uploader :header, HeaderUploader
  has_many :images
  acts_as_taggable
 # has_many :tags

 rails_admin do
  configure :tag_list
end

end
