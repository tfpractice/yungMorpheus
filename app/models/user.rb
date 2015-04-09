class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_many :comments, as: :authorable, class_name: "User"

  def screenname
    self.email
  end

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
end
