class HomeController < ApplicationController
  def index
  	@sections = Section.includes(:serials, :articles).all
  	@articles = Article.all.paginate(:page => params[:page], :per_page => 1)
    @serials = Serial.all

  end

  def about
  end

  def contact
  end
end
