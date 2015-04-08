class Comment < ActiveRecord::Base
  belongs_to :authorable, polymorphic: true
  belongs_to :commentable, polymorphic: true
end
