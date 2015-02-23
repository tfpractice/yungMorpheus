class Section < ActiveRecord::Base
	has_many :articles
	has_many :serials
end
