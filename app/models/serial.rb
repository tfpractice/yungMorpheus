class Serial < ActiveRecord::Base
  belongs_to :section, polymorphic: true
  has_many :articles
  mount_uploader :header, HeaderUploader
  acts_as_taggable


 rails_admin do
  configure :tag_list
end


end
