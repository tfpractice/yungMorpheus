class Serial < ActiveRecord::Base
  include Commentable


  belongs_to :section, polymorphic: true
  has_many :articles

  mount_uploader :header, HeaderUploader
  acts_as_taggable




  scope :published, -> {where(published: true)}
  scope :featured, -> {where(featured: true)}

 def related_tags
    @serial.find_related_tags
  end

  
 rails_admin do
  configure :tag_list
end


end
