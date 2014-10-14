Rails.application.routes.draw do
  get '/pictures/clear_all', :to => 'pictures#clear_all'

  resources :messages
  resources :pictures
  resources :comments
  devise_for :users
  root 'static_pages#index'

  # Routes for Stripe. Hitting Charges Controller
  resources :charges

  get '/user', :to => 'users#index'
end
