class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :setMenuLinks #, :authenticate_viewer!
  # current_viewer_id = @viewer.id



  def setMenuLinks
  	@sharedSections = Section.includes(:serials, :articles).all
  	
  end
  

end
