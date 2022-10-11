class Admin < ApplicationRecord
    has_many :rooms 
    has_many :employees
    has_many :guests, through: :rooms 
end
