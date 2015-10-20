module Product
  class Data < Grape::API
    format :json
    resource :list do 
      desc "List all Lists"
      get do 
        List.all   
      end

      desc "create a new product list"
      params do 
        requires :title, type: String
        requires :category, type: String
        requires :price
      end

      post do 
        List.create!({
          title:params[:title],
          category:params[:category],
          price:params[:price],
          description:params[:description]
        })
      end

      desc "delete a list"
      params do 
        requires :id, type: String
      end
      delete ':id' do 
        List.find(params[:id]).destroy!
      end

      desc "update list"
      params do 
        requires :id, type: String
        requires :cateogry, type: String
      end
      put ':id' do 
        List.find(params[:id]).update({
          category:params[:category]
          })
      end
    end

    resource :item do 
      desc "Item all Items"
      get do 
        Item.all   
      end

      desc "Return an item"
      params do 
        requires :id, type: Integer
      end
      route_param :id do 
        get do 
          Item.find(params[:id])
        end
      end
      
      desc "create a new product item"
      params do 
        requires :title, type: String
        # requires :category, type: String
        requires :price
      end

      post do 
        Item.create!({
          title:params[:title],
          # category:params[:category],
          price:params[:price],
          description:params[:description]
        })
      end

      desc "delete a item"
      params do 
        requires :id, type: String
      end
      delete ':id' do 
        Item.find(params[:id]).destroy!
      end

      desc "update item"
      params do 
        requires :id
        # requires :cateogry, type: String
      end
      put ':id' do 
        Item.find(params[:id]).update({
          # category:params[:category]
          })
      end
    end
  end
end