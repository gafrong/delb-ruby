module Product
  class Data < Grape::API
    format :json

    resource :files do 
      post do 
        # params[:file].delete :file
        asset = Asset.new params[:file]
        asset.save

        asset.inspect
      end
    end
  end
end