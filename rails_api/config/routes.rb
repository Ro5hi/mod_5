Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/api/v1/addpart", to: "api/v1/parts#create"
  post "/api/v1/newbuild", to: "api/v1/builds#create"
  get "/api/v1/builds", to: "api/v1/builds#index"
  get "/api/v1/build/:id" to: "api/v1/build#show"
  get "/api/v1/parts", to: "api/v1/parts#index"
  
  #changed routes

  namespace :api do
    namespace :v1 do 
      resources :builds
      resources :parts
end
