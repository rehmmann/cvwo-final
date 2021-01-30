Rails.application.routes.draw do

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

root 'tasks#index' #root is welcome controller and index action


get 'items/new' 
get 'welcome/index'
get 'tasks/about'
get 'tasks/index'


resources :tasks;
resources :items;

end
