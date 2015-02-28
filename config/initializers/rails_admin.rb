RailsAdmin.config do |config|

  ### Popular gems integration

  ## == Devise ==
   config.authenticate_with do
     warden.authenticate! scope: :user
   end
  # config.current_user_method(&:current_user)

  ## == Cancan ==
  # config.authorize_with :cancan

  ## == PaperTrail ==
 

  # config.audit_with :paper_trail, 'User', 'PaperTrail::Version' # PaperTrail >= 3.0.0


=begin BULLLSHITTRYING TO GET RAILS_ADMIN TO WORK
config.model ActsAsTaggableOn::Tag do 
    edit do 
      exclude_fields :taggings_count
      exclude_fields :taggings
    end
  end

  config.model ActsAsTaggableOn::Tagging do 
    edit do 
      exclude_fields :context
    end
  end

  admin_models = ActiveRecord::Base.descendants.map(&:name)

  config.included_models = admin_models


  =end
=begin 
 config.model Article do
  edit do
  field :name
  field :description
  field :content
  field :header
  field :tag_list
  end

 end
 =end

=begin 
config.model Post do
  list do
    field :title
    field :tag_list
  end

  edit do
    field :title
    field :tag_list do
      html_attributes do
        {:style => "width:90%"}
      end
    end
    field :content
  end
end

=end




  ### More at https://github.com/sferik/rails_admin/wiki/Base-configuration

  config.actions do
    dashboard                     # mandatory
    index                         # mandatory
    new
    export
    bulk_delete
    show
    edit
    delete
    show_in_app

    ## With an audit adapter, you can add:
    # history_index
    # history_show
  end


end
