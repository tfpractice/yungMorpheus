class HomeController < ApplicationController
  def index
  	@sections = Section.includes(:serials, :articles).all
  	@articles = Article.all
    @serials = Serial.all

  end

  def about
  end

  def contact
  end
end
