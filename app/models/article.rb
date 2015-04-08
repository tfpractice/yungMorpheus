class Article < ActiveRecord::Base
  belongs_to :section, polymorphic: true
  belongs_to :serial, polymorphic: true
  mount_uploader :header, HeaderUploader
  has_many :comments, as: :commentable

  has_many :images
  has_many :scripts
  has_many :datasets
  acts_as_taggable
 # has_many :tags


 rails_admin do
  configure :tag_list
end

end
