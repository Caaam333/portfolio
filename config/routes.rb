Rails.application.routes.draw do
  root to: 'pages#home'
  get 'english', to: 'pages#index'
  get 'download_fr'=> 'pages#download_pdf_fr'
  get 'download_en'=> 'pages#download_pdf_en'
end
