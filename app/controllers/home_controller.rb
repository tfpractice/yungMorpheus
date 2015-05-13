class HomeController < ApplicationController
  def index
  	@sections = Section.includes(:serials, :articles).all


  	if params[:tag]
  		# @tag = Tag.find(params[:tag])
  		# @tagName = @tag.name
  		# @articles = Article.tagged_with(@tagName)
  		# @serials = Serial.tagged_with(@tagName)
      @tag = params[:tag]

      @articles = Article.tagged_with(@tag)
      @serials = Serial.tagged_with(@tag)
  	else
  	@articles = Article.all
    # @featuredPosts = Article.feat
#  	@articles = Article.all.paginate(:page => params[:page], :per_page => 1)
    @serials = Serial.all
	end


  end

  def about
  end

  def contact
  end
end
