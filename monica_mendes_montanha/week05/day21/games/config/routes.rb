Rails.application.routes.draw do
  root :to => 'welcome#index'
  get '/magic8_ball' => 'magic8_ball#index'
  post '/magic8_ball/answer' => 'magic8_ball#answer'
  get '/secret_number' => 'secret_number#index'
  get '/rock_paper_scissors' => 'rock_paper_scissors#index'
end
