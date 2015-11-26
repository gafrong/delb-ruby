module Product
  class Itemdata < Grape::API
    format :json

    resource :item do 
      desc "Item all Items"
      get do 
        Item.all   
      end

      desc "Return an item"
      params do 
        requires :id, type: Integer
        # requires :file, :type => Rack::Multipart::UploadedFile
      end
      route_param :id do 
        get do 
          Item.find(params[:id])
        end
      end
      
      post do 
        # new_file = ActionDispatch::Http::UploadedFile.new(params[:file])
        item = Item.new
        item.user_id = params[:user_id]
        item.image_url50 = params[:image_url50]
        item.title = params[:title]
        item.price = params[:price]
        item.description = params[:description]
        
        item.save
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