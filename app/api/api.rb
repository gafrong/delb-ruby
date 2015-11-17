class API < Grape::API


  version 'v1', using: :path
  mount Product::Data
  mount Product::Itemdata
  mount Product::Listdata

  add_swagger_documentation base_path: "/api",
                            api_version: 'v1',
                            hide_documentation_path: true
end