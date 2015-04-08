Rails.application.routes.draw do


  # get 'sessions/create'

  # get 'sessions/destroy'

  root 'home#index'

  get 'home/index'


  get 'home/about'

  get 'home/contact'

  devise_for :users
  devise_for :viewers, :controllers => { :omniauth_callbacks => "viewers/omniauth_callbacks" }

  devise_scope :viewer do
    get 'sign_out', :to => 'viewers/sessions#destroy' #, :as => :destroy_viewer_session
  end


  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  get 'sample/index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"


  concern :commentable do

    resources :comments

  end


  resources :sections, only: [:show] do
    # concerns :commentable
      resources :articles, :serials, only: [:index, :show] do
     concerns :commentable
   end
    #, controller: 'sections/articles'
    #resources :serials, only: [:index, :show], controller: 'sections/serials'
  end


  resources :articles, :serials, only: [:index, :show] do
     concerns :commentable
   end





  # resources :sections, concerns :commentable
  # resources :serials, concerns :commentable
  # resources :articles, concerns :commentable




  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end



  match ':controller(/:action(/:id(.:format)))', :via => :get
end
