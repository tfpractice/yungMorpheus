class Script < ActiveRecord::Base
  belongs_to :article, polymorphic: true
  mount_uploader :jscript, JscriptUploader

end
