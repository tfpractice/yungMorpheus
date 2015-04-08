class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :load_commentable #, only: [:show, :edit, :update, :destroy]
  before_action :set_section, except: [:create, :index]
  # before_action :load_authorable, only: [:index, :show] #, :update, :destroy]
  before_action :set_authorable, only: [:new, :edit, :update, :destroy]


  # GET /comments
  # GET /comments.json
  def index
    @comments = @commentable.comments
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    #redirect_to [@section, @commentable]
  end

  # GET /comments/new
  def new
    @comment = @commentable.comments.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = @commentable.comments.new(comment_params)
    current_viewer_id = current_viewer.id 
    # @authorable = Viewer.find(current_viewer_id) 
    params[:authorable_id] = current_viewer_id

    respond_to do |format|
      if @comment.save
        format.html { redirect_to [@commentable, :comments], notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to [@section, @commentable, :comments], notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to comments_url, notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_comment
    @comment = Comment.find(params[:id])
  end

  def load_commentable
    #  @commentable = @comment.commentable
    klass = [Serial, Article].detect {|auth| params["#{auth.name.underscore}_id"]}
    @commentable = klass.find(params["#{klass.name.underscore}_id"])


  end

  def set_section

    @section = Section.find(params[:section_id])


  end

  # def load_authorable
  #   @authorable = nil || @comment.authorable
  # end

  def set_authorable
    #@authorable = current_viewer || current_user
    #@authorable = Viewer.find(params[:viewer_id]) 
    current_viewer_id = current_viewer.id 
    # @authorable = Viewer.find(current_viewer_id) 
    # @comment.authorable_id = current_viewer_id
    # params[:authorable_id]= current_viewer_id

     # klass = [User, Viewer].detect {|auth| params["#{auth.name.underscore}_id"]}
     # @authorable = klass.find(params["#{klass.name.underscore}_id"])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:authorable_id, :authorable_type, :commentable_id, :commentable_type, :content)
  end
end
