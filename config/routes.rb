Rails.application.routes.draw do

  resources :messages
  resources :pictures
  devise_for :users
  root 'static_pages#index'

end
