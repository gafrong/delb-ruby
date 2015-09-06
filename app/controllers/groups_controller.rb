class GroupsController < ApplicationController
  devise_token_auth_group :member, contains: [:user]
  before_filter :authenticate_user!
end