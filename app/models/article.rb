class Article < ActiveRecord::Base

  include Commentable

  belongs_to :section, polymorphic: true
  belongs_to :serial, polymorphic: true
  mount_uploader :header, HeaderUploader


  has_many :images
  has_many :scripts
  has_many :datasets
  acts_as_taggable


  scope :published, -> {where(published: true)}
  scope :featured, -> {where(featured: true)}

  searchable do
    text :name, boost: 5
    text :content
    text :comments do
      comments.map(&:content)
    end

  end



  # def showData(dPath)
  #   File.read(dPath)

  # end


  def related_tags
    @article.find_related_tags
  end

  def imageArray

    images.to_a


  end

  def dataURLs
    datasets.map do |dSet|
      dSet.data_url

    end

  end

  def getURL(index)
    gon.gotURL = self.dataURLs[index]

  end


  def getFile(index)
    self.dataFiles(index)
    # return allFiles(index)
    gon.data_url


  end


  def dataFiles
    datasets.map do |dSet|
      dSet.data.file

    end

  end

  def dataContents
    datasets.map do |dSet|
      dSet.data.read

    end

  end

  rails_admin do
    configure :tag_list
  end

end
