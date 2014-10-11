Rails.application.routes.draw do
  devise_for :users
  resources :messages
  root 'static_pages#index'
end
