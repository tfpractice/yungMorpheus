class Viewer < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable


  has_many :comments, as: :authorable

  
  	devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
	devise :omniauthable, :omniauth_providers => [:facebook]


	def self.from_omniauth(auth)
	  where(provider: auth.provider, uid: auth.uid).first_or_create do |viewer|
	    viewer.email = auth.info.email
	    viewer.password = Devise.friendly_token[0,20]
	    viewer.screenname = auth.info.name   # assuming the viewer model has a name
	    # viewer.image = auth.info.image # assuming the viewer model has an image
	  end
	end

	 def self.new_with_session(params, session)
	    super.tap do |viewer|
	      if data = session["devise.facebook_data"] && session["devise.facebook_data"]["extra"]["raw_info"]
	        viewer.email = data["email"] if viewer.email.blank?
	      end
	    end
	  end


end
