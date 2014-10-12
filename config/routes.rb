Rails.application.routes.draw do

  resources :messages
  resources :pictures
  devise_for :users
  root 'static_pages#index'

  # Routes for Stripe. Hitting Charges Controller
  resources :charges

  get '/user', :to => 'users#index'
end
