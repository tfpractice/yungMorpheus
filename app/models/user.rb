class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :comments, as: :authorable
  # alias_attribute :email, :screenname
  # def screenname


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
