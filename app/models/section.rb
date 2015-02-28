class Section < ActiveRecord::Base
	has_many :articles
	has_many :serials
	mount_uploader :header, HeaderUploader
	

end


