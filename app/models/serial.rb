class Serial < ActiveRecord::Base
  belongs_to :section, polymorphic: true
  has_many :articles
  mount_uploader :header, HeaderUploader

end
