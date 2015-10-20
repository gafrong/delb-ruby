Rails.application.routes.draw do
  get 'items/index'

  get 'items/new'

  get 'items/create'

  devise_for :users, controllers: {
    sessions: 'users/sessions'
  }

  get '/', to: redirect('/')

  namespace :api, defaults: {format: :json} do 
    mount_devise_token_auth_for 'User', at: 'auth'
    resources :groups, except: [:new, :edit]
    
    namespace :v1 do
      resources :lists
      resources :items
    end
  end

  mount API => '/api'

end
