Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :guests, only: [:create, :index, :update, :destroy]
  resources :employees, only: [:index]
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "admins#show"
end
