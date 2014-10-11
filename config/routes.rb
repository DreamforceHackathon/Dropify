Rails.application.routes.draw do

  resources :messages
  devise_for :users
  resources :messages
  root 'static_pages#index'

end
