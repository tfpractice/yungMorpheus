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

  # def showData(dPath)
  #   File.read(dPath)
    
  # end
  def related_tags
    @article.find_related_tags
  end

  def dataURLs
     datasets.map do |dSet|
      dSet.data_url

    end
    
  end


# def getFile(index)
#   self.dataFiles(index)
#   # return allFiles(index)

  
# end


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
