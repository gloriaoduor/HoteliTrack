class Guest < ApplicationRecord
    has_one :room
    has_one :employee
end
