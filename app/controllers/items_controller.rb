class ItemsController < ApplicationController
  def index 
    @items = Item.all
    
    responde_to do |format|
      format.html {}
      format.json { render :json => @items}
    end
  end

  def create
    @item = Item.new(item_params)
    @item.save
    render :json => @item
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    render :json => @item
  end

  def show
    @item = Item.find(params[:id])
    render :json => @item
  end

  private

  def item_params
    params.require(:item).permit(:title, :price, :description, :image)
  end
end
