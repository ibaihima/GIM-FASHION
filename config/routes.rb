Rails.application.routes.draw do
  
  resources :users
  resources :items
  resources :cloths
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }


  get "/cloths/sweaters", to:"cloths#sweaters"
  get "/cloths/pants", to:"cloths#pants"
  get "/cloths/shoes", to:"cloths#shoes"
end
