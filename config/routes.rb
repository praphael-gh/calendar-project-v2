Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  resources :events, only: [:index, :show, :create, :destroy, :update]
  resources :days, only: [:index, :show, :create]
end
