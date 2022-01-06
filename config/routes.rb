Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :destroy]
  get "/me", to: "users#show"

  resources :events, only: [:index, :show, :create, :destroy, :update]

  resources :days, only: [:index]
  get 'days/:date', to: 'days#show'

  
  post "/login", to: "sessions#create"


end  


