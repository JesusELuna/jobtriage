Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post 'auth/register', to: 'auth#register'
  post 'auth/login', to: 'auth#login'
  post 'auth/logout', to: 'auth#logout'
  get 'auth/logout', to: 'auth#logout'
  get 'auth/test', to: 'auth#test'

  resources :applications do
    resources :notes
  end
end
