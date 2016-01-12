require 'rmagick'

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
        requires :image, :type => Rack::Multipart::UploadedFile
      end
      route_param :id do 
        get do 
          Item.find(params[:id])
        end
      end
      
      post do 

        image = params[:image]
        attachment = {
          filename: image[:filename],
          type: image[:type],
          headers: image[:head],
          tempfile: image[:tempfile]
        }

        item = Item.new
        item.user_id = params[:user_id]
        item.image = ActionDispatch::Http::UploadedFile.new(attachment)
        item.image_path = attachment[:tempfile]
        item.image_content_type = attachment[:type]
        item.image_file_name = attachment[:filename]
        item.image_url50 = attachment[:tempfile]
        item.title = params[:title]
        item.price = params[:price]
        item.description = params[:description]
        item.availability = params[:availability]
        item.quantity = params[:quantity]
        item.saletype = params[:saletype]
        item.merchant_id = params[:merchant_id]
        item.category_id = params[:category_id]
        item.category = params[:category]
        item.brand = params[:brand]
        item.color = params[:color]
        item.gender = params[:gender]
        item.sku = params[:sku]
        item.keywords = params[:keywords]
        item.merchant_url = params[:merchant_url]
        item.active = params[:active]
        item.id = params[:id]
        item.location = params[:location]
        
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