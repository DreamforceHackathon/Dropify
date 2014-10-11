Rails.application.routes.draw do

  resources :messages
  devise_for :users
  root 'static_pages#index'

end
