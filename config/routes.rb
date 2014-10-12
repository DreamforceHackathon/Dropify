Rails.application.routes.draw do

  resources :messages
  devise_for :users
  root 'static_pages#index'

  # Routes for Stripe. Hitting Charges Controller
  resources :charges
end
