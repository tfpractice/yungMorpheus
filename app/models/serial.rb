class Serial < ActiveRecord::Base
  belongs_to :section, polymorphic: true
end
