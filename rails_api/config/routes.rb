Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post "/api/v1/addpart/:id", to: "api/v1/parts#create"
  post "/api/v1/newbuild/:id", to: "api/v1/builds#create"
  delete "/api/v1/part/:id", to: "api/v1/parts#destroy"
  get "/api/v1/builds", to: "api/v1/builds#index"
  get "/api/v1/build/:id", to: "api/v1/build#show"
  get "/api/v1/parts", to: "api/v1/parts#index"
  get "/api/v1/parts/:id", to: "api/v1/parts#show"
  
  #changed routes

  namespace :api do
    namespace :v1 do 
      resources :builds
      resources :parts
    end
  end
end