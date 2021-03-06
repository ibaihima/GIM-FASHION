Rails.application.routes.draw do
  
  resources :users
  resources :items
  resources :cloths
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  get "/sweaters", to: "cloths#sweaters"
  get "/pants", to: "cloths#pants"
  get "/shoes", to: "cloths#shoes"

  delete "/cloths/:cloth_id/:user_id", to: "items#destroy"
  


  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }



end
