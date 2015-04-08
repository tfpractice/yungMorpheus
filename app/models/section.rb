class Section < ActiveRecord::Base
	has_many :articles
	has_many :serials
	# has_many :comments, as: :commentable

	mount_uploader :header, HeaderUploader
	

end


