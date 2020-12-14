class ItemsController < ApplicationController

  def index
    @title = "Gd Progress";
  end



  def new

    @title = "My new Items page";

  end

  def create 
    render plain:params[:item].inspect
  end
  
end
