# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile += %w( main.css )
Rails.application.config.assets.precompile += %w( fbAuth.js )
# Rails.application.config.assets.precompile += %w( vis.js )
#
Rails.application.config.assets.precompile += %w( c3.js )
Rails.application.config.assets.precompile += %w( c3.css )

Rails.application.config.assets.precompile += ['rails_admin/rails_admin.css', 'rails_admin/rails_admin.js']


# Rails.application.config.assets.precompile += [/.*\.js/,/.*\.css/]
# Rails.application.config.assets.precompile += %w( articleVis/articleVis.js )



Rails.application.config.assets.debug


