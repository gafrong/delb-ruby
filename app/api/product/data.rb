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

    resource :upload do
      post do
          # takes the :avatar value and assigns it to a variable
          avatar = params[:avatar]

          # the avatar parameter needs to be converted to a
          # hash that paperclip understands as:
          attachment = {
              :filename => avatar[:filename],
              :type => avatar[:type]
          }

          # creates a new User object
          userx = Userx.new

          # This is the kind of File object Grape understands so let's
          # pass the hash to it
          userx.avatar = ActionDispatch::Http::UploadedFile.new(attachment)

          # easy
          userx.avatar_path = attachment[:filename]

          # even easier
          userx.name = "dummy name"

          # and...
          userx.save
      end
    end
  end
end