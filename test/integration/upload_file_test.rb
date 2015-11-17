require "test_helper"
require "app"

describe "Upload a file" do 
  include Rack::Test::Methods

  def app
    API::App 
  end

  it "uploads a file" do 
    file_path = fixture_path "delb.png"
    post "/files", {
      file: {
        title: "My First Zip File",
        file: Rack::Test::UploadedFile.new(file_path, "application/delb.png", true)
      }
    }

    last_response.status.must_equal 201
  end
end