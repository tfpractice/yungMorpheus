class Section < ActiveRecord::Base
	has_many :articles
	has_many :serials
	# has_many :comments, as: :commentable

	mount_uploader :header, HeaderUploader

	acts_as_tagger

	def set_writable_tags
		self.articles.each do |article|
			if article.tags.length >0 
				subTagList = article.tags 
			self.tag(article, :with => subTagList, on: :tags)
				
			end
			
		end

	end


end


