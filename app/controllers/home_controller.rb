class HomeController < ApplicationController
  def index
  	@sections = Section.includes(:serials, :articles).all
  end

  def about
  end

  def contact
  end
end
