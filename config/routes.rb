Rails.application.routes.draw do
  root to: 'pages#home'
  get 'english', to: 'pages#index'
end
