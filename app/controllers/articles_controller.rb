class ArticlesController < ApplicationController
  # before_action :set_article, only: [:show, :edit, :update, :destroy]
  before_action :set_article, :set_section, :check_data, :check_images, only: [:show]
  # respond_to :html, :xml, :json


  # GET /articles
  # GET /articles.json
 

  def index
  @search = Article.search do
    fulltext params[:search]
    # with(:published_at).less_than(Time.zone.now)
    # facet(:publish_month)
    # with(:publish_month, params[:month]) if params[:month].present?
  end
  @articles = @search.results
      @sections = Section.all

end

  # GET /articles/1
  # GET /articles/1.json
  def show
    #   @rendered = render_to_string(:text => @article.content)
    @commentable = @article
    @comments= @commentable.comments
    @comment = Comment.new
    @authorable   = current_user || current_viewer
   
  end

  # GET /articles/new
=begin  def new
    @article = Article.new
  end

  # GET /articles/1/edit
  def edit
  end

  # POST /articles
  # POST /articles.json
  def create
    @article = Article.new(article_params)

    respond_to do |format|
      if @article.save
        format.html { redirect_to @article, notice: 'Article was successfully created.' }
        format.json { render :show, status: :created, location: @article }
      else
        format.html { render :new }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /articles/1
  # PATCH/PUT /articles/1.json
  def update
    respond_to do |format|
      if @article.update(article_params)
        format.html { redirect_to @article, notice: 'Article was successfully updated.' }
        format.json { render :show, status: :ok, location: @article }
      else
        format.html { render :edit }
        format.json { render json: @article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.json
  def destroy
    @article.destroy
    respond_to do |format|
      format.html { redirect_to articles_url, notice: 'Article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end
=end
  private
  # Use callbacks to share common setup or constraints between actions.
  def set_article
    @article = Article.find(params[:id])
  end

  def getFile(index)
    gon.dataFile = @dataFiles[index].read
    
  end

  def check_data
    if @article.datasets.size > 0
    @dataURLs = @article.dataURLs
    @dataFiles = @article.dataFiles
    @dataContents = @article.dataContents
    gon.dataURLs = @article.dataURLs
    gon.dataContent = @dataFiles[0].read 
    gon.dataContents = @dataContents
    gon.firstFile = @dataFiles[0]
    gon.firstURL = @dataURLs[0]
    end
    
  end

  def check_images
    if @article.images.size > 0
    @images = @article.imageArray
    end
    
  end

  def set_section
   
    @section = Section.find(params[:section_id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def article_params
    params.require(:article).permit(:name, :description, :section_id, :section_type, :serial_id, :created_at, :tag_list => [])
  end
end
