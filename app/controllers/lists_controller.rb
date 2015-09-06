class ListsController < ApplicationController
  before_filter :authenticate_user!
  
  def index 
    @lists = List.all
    
    responde_to do |format|
      format.html {}
      format.json { render :json => @lists}
    end
  end

  def create
    @list = List.new(list_params)
    @list.save
    render :json => @list
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
    render :json => @list
  end

  private

  def list_params
    params.require(:list).permit(:body)
  end
  
end
